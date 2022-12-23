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
import { useNavigate, useParams } from "react-router-dom";

const title = "Lab Services";

function Confirm() {
  const theme = useTheme();
  const navigate = useNavigate();
  let { service } = useParams();

  return (
    <Box>
      <ProgressHeader title={title} progress={50} />
      <Box px="30px">
        <Box align="center">
          <CheckIcon />
          <Typography variant="h3">Your appointment is scheduled</Typography>
          <Typography variant="h5">Date and time</Typography>
          <Typography>Thursday, October 29, 2022</Typography>
          <Typography>10:30 am - 11:00 am</Typography>

          <Typography variant="h5">Directions to our clinic</Typography>
          <Typography>OKB Hope Clinic</Typography>
          <Typography>Lorem ipsum 23345</Typography>

          <Divider />

          <Typography variant="h5">Lab tests</Typography>
          <Typography>Blood Film for Malaria</Typography>
          <Typography>Sickle cell electrophoresis</Typography>
          <Typography variant="caption">
            Estimated overall cost range: GH$10 - GH$15
            <br />
            Estimated time at the facility: 20 minutes
          </Typography>

          <Typography variant="h5">Patient’s details</Typography>
          <Typography>Jane Doe</Typography>
          <Typography>01234567891</Typography>
          <Typography>Known patient</Typography>

          <Typography variant="h5">
            We will send you a reminder 24-48 hours before your appointment
          </Typography>

          <Button
            onClick={() => navigate("/labtests")}
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
