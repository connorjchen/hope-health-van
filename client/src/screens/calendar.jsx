import { Box, Typography, useTheme, Alert, Button } from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import { useNavigate } from "react-router-dom";

function Calendar() {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleCalendlySubmit = (e) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_CALENDLY_PAT}`,
      },
    };

    fetch(e.data.payload.event.uri, options)
      .then((response) => response.json())
      .then((response) => console.log(response.resource))
      .catch((err) => console.error(err));
  };

  useCalendlyEventListener({
    onEventScheduled: (e) => handleCalendlySubmit(e),
  });

  return (
    <Box>
      <ProgressHeader title="Lab Services" progress={25} />
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
          name: "Jon Snow",
          location: "1",
          customAnswers: {
            a1: "a1",
            a2: "1",
            a3: "a3",
            a4: "a4",
            a5: "a5",
            a6: "a6",
            a7: "a7",
            a8: "a8",
            a9: "a9",
            a10: "a10",
          },
        }}
      />
      <Box align="center">
        <Button
          onClick={() => navigate("/labtests")}
          sx={{
            ...theme.purpleButton,
            px: "40px",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Calendar;
