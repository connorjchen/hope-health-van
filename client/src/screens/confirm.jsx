import {
  Box,
  useTheme,
  Typography,
  Divider,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Alert,
  Button,
} from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import CheckIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { serviceConstants } from "./select";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

function Confirm() {
  dayjs.extend(utc);
  const theme = useTheme();
  const navigate = useNavigate();
  let { service } = useParams();
  const { state } = useLocation();

  const ServiceInfo = () => {
    if (service === "labservices") {
      return (
        <>
          <Typography variant="h5">Lab tests</Typography>
          {state.services.map((service) => (
            <Typography key={service}>{service}</Typography>
          ))}
          <Typography variant="caption">
            Estimated overall cost range: GH$10 - GH$15
            <br />
            Estimated time at the facility: 20 minutes
          </Typography>
        </>
      );
    } else if (service === "teleheatlh") {
      return (
        <>
          <Typography variant="h5">Services</Typography>
          <Typography>
            Blood Film for Malaria
            <br />
            Sickle cell electrophoresis
          </Typography>
          <Typography variant="caption">
            Estimated overall cost range: GH$10 - GH$15
            <br />
            Estimated time at the facility: 20 minutes
          </Typography>
        </>
      );
    }
  };

  return (
    <Box>
      <ProgressHeader title={serviceConstants[service].title} progress={100} />
      <Box px="20px">
        <Box align="center">
          <Box mt="30px">
            <CheckIcon color="success" fontSize="large" />
          </Box>

          <Typography variant="h3">Your appointment is scheduled</Typography>
          <Typography variant="h5">Date and time</Typography>
          <Typography>
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
              <Typography variant="h5">Location</Typography>
              <Typography>{state.location}</Typography>
            </>
          )}
          <Box mt="20px" mx="50px">
            <Divider
              sx={{
                background: theme.palette.purple.dark,
              }}
            />
          </Box>
          <ServiceInfo />
          <Typography variant="h5">Patient’s details</Typography>
          <Typography>
            {state.name}
            <br />
            {state.phoneNumber}
            <br />
            {state.okbNumber ? "Known patient" : "New patient"}
          </Typography>
          <Typography variant="h5" my="30px">
            We will send you a reminder 24-48 hours before your appointment
          </Typography>
          <Button
            onClick={() => navigate("/")}
            sx={{
              ...theme.purpleButton,
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
