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

function Personal() {
  const theme = useTheme();
  const navigate = useNavigate();
  let { service } = useParams();

  return <Box>Personal</Box>;
}

export default Personal;
