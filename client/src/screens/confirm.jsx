import {
  Box,
  Typography,
  useTheme,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  Alert,
  Button,
} from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";

function Confirm() {
  const theme = useTheme();
  const navigate = useNavigate();
  let { service } = useParams();

  return <Box>Confirm</Box>;
}

export default Confirm;
