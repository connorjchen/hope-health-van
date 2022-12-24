import { Box, Typography, useTheme, Alert, Button } from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { serviceConstants } from "./select";

const locations = {
  labservices: "Hope Clinic",
  mobilevan: "Mobile Van",
  telehealth: "Phone Call",
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
          services: state.optionsSelected,
          okbNumber,
          additionalInfo,
        };

        fetch(e.data.payload.event.uri, options)
          .then((response) => response.json())
          .then((response) => {
            const {
              start_time: startTime,
              end_time: endTime,
              location,
            } = response.resource;

            payload = {
              ...payload,
              startTime,
              endTime,
              location: location.location,
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
        url="https://calendly.com/okb-hope-health/okb-appointment"
        styles={{
          height: "1168px",
        }}
        prefill={{
          email: "info@okbfoundation.org",
          location: locations[service],
          customAnswers: {
            a2: state.optionsSelected.join(", "),
          },
        }}
      />
    </Box>
  );
}

export default Calendar;
