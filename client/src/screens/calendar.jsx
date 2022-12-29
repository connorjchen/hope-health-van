import { Box, Typography, useTheme } from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { serviceConstants } from "./select";

const locations = {
  labservices: 1,
  mobilevan: "",
  telehealth: 2,
};

function Calendar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { service } = useParams();
  const { state } = useLocation();

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
            // MAKE SURE THIS IS UTC / GMT - GHANA LOCAL TIME
            payload = {
              ...payload,
              startTime,
              endTime,
            };
            console.log(payload);
            navigate(`/booking/${service}/confirmation`, {
              state: payload,
            });
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
