import { Box, useTheme, Typography, Divider, Button } from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import CheckIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import {
  useNavigate,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
import { serviceConstants } from "./select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

function Confirm() {
  dayjs.extend(utc);
  const theme = useTheme();
  const navigate = useNavigate();
  let { service } = useParams();
  const { state } = useLocation();

  if (state === null) {
    return <Navigate replace to={`/booking/${service}/select`} />;
  }

  return (
    <Box>
      <ProgressHeader title={serviceConstants[service].title} progress={100} />
      <Box
        sx={{
          maxWidth: "md",
          mx: { xs: "20px", md: "auto" },
        }}
      >
        <Box align="center">
          <Box mt="30px">
            <CheckIcon color="success" fontSize="large" />
          </Box>

          <Typography variant="h3">Your appointment is scheduled</Typography>
          <Typography variant="h5" mb="4px">
            Date and time (UTC)
          </Typography>
          <Typography variant="body1">
            {dayjs(state.startTime).utc().format("dddd, MMMM D YYYY")}
            <br />
            {`${dayjs(state.startTime).utc().format("LT")} - ${dayjs(
              state.endTime
            )
              .utc()
              .format("LT")}`}
          </Typography>
          {service !== "telehealth" && (
            <>
              <Typography variant="h5" mt="24px" mb="4px">
                Location
              </Typography>
              <Typography variant="body1">{state.location}</Typography>
            </>
          )}
          <Box mt="20px" mx="50px">
            <Divider
              sx={{
                borderWidth: "1px",
                borderColor: theme.palette.blue.dark,
                backgroundColor: theme.palette.blue.dark,
              }}
            />
          </Box>
          <Typography variant="h5" mt="24px" mb="4px">
            Services
          </Typography>
          {state.services.map((service) => (
            <Typography key={service}>{service}</Typography>
          ))}
          <Typography variant="caption">
            {service === "telehealth"
              ? `Estimated overall cost: GH$${state.minPrice}`
              : `Estimated overall cost range: GH$${state.minPrice} - GH$${state.maxPrice}`}
            <br />
            Estimated time at the facility: 30 minutes
          </Typography>
          <Typography variant="h5" mt="24px" mb="4px">
            Patient’s details
          </Typography>
          <Typography variant="body1">
            {state.name}
            <br />
            {state.phoneNumber}
            <br />
            {state.okbNumber ? "Known patient" : "New patient"}
          </Typography>
          {/* <Typography variant="h5" my="32px">
            We will send you a reminder 24-48 hours before your appointment
          </Typography> */}
          <Button
            onClick={() => navigate("/")}
            sx={{
              ...theme.blueButton,
              px: "30px",
            }}
          >
            Exit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Confirm;
