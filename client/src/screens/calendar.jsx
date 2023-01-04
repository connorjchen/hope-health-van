import { Box, Typography, useTheme } from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import {
  useLocation,
  useNavigate,
  useParams,
  Navigate,
} from "react-router-dom";
import { serviceConstants } from "./select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import Axios from "axios";

const baseUrl = "http://ec2-3-92-226-174.compute-1.amazonaws.com:4000/booking";

const locations = {
  labservices: 1,
  mobilevan: "",
  telehealth: 2,
};

function Calendar() {
  dayjs.extend(utc);
  const theme = useTheme();
  const navigate = useNavigate();
  const { service } = useParams();
  const { state } = useLocation();

  if (state === null) {
    return <Navigate replace to={`/booking/${service}/select`} />;
  }

  const handleCalendlySubmit = (e) => {
    let payload = {};

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_PAT}`,
      },
    };

    console.log(e.data.payload);

    fetch(e.data.payload.invitee.uri, options)
      .then((response) => response.json())
      .then((response) => {
        const {
          name,
          email,
          cancel_url: cancelUrl,
          questions_and_answers: questionResponses,
        } = response.resource;

        const findAnswerToQuestion = (questionResponses, question) =>
          questionResponses.find((qr) => qr.question === question)?.answer;

        const phoneNumber = findAnswerToQuestion(
          questionResponses,
          "Phone Number"
        );
        const location = findAnswerToQuestion(questionResponses, "Location");
        const okbNumber = findAnswerToQuestion(
          questionResponses,
          "If you are a previous patient, provide OKB number for medical record"
        );
        const additionalInfo = findAnswerToQuestion(
          questionResponses,
          "Please share anything that will help prepare for our meeting"
        );

        payload = {
          ...payload,
          name,
          email,
          cancelUrl,
          phoneNumber,
          location,
          services: state.optionsSelected,
          minPrice: state.minPrice,
          maxPrice: state.maxPrice,
          okbNumber,
          additionalInfo,
        };

        fetch(e.data.payload.event.uri, options)
          .then((response) => response.json())
          .then((response) => {
            const { start_time: startTime, end_time: endTime } =
              response.resource;
            payload = {
              ...payload,
              startTime,
              endTime,
            };
            console.log(payload);

            Axios.all([
              () => {
                if (!okbNumber) {
                  Axios.post(`${baseUrl}/addPatient`, {
                    name: payload.name,
                    phone: payload.phoneNumber,
                    okb_id: 0,
                  })
                    .then((response) => console.log(response))
                    .catch((err) => console.error(err));
                }
              },
              Axios.post(`${baseUrl}/appointment`, {
                services: payload.services,
                appointmentType: service,
                location:
                  service !== "telehealth" ? payload.location : "online", // TODO: finalize what location specified for telehealth
                dateTime: dayjs(payload.startTime)
                  .utc()
                  .format("h:mm A dddd, MMMM D YYYY"),
                name: payload.name,
                phone: payload.phoneNumber,
                okb_id: payload.okbNumber,
              })
                .then((response) => console.log(response))
                .catch((err) => console.error(err)),
            ]).then(() =>
              navigate(`/booking/${service}/confirmation`, {
                state: payload,
              })
            );
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };

  useCalendlyEventListener({
    onEventScheduled: handleCalendlySubmit,
  });

  return (
    <Box>
      <ProgressHeader
        title={serviceConstants[service].title}
        onBack={() => navigate(`/booking/${service}/select`)}
        progress={50}
      />
      <Typography variant="h3" textAlign="center">
        Find an appointment
      </Typography>
      <InlineWidget
        url={serviceConstants[service].calendly}
        styles={{
          height: "100vh",
        }}
        prefill={{
          email: "info@okbfoundation.org",
          customAnswers: {
            a2: locations[service],
            a3: state.optionsSelected.join(", "),
          },
        }}
      />
    </Box>
  );
}

export default Calendar;
