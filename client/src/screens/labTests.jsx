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
} from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import SearchIcon from "@mui/icons-material/Search";

function LabTests() {
  const theme = useTheme();

  return (
    <Box>
      <ProgressHeader title="Lab Services" progress={5} />
      <Box px="30px">
        <Box align="center">
          <Typography variant="h3">Select lab tests</Typography>
          <Typography variant="subtitle1" mb="15px">
            <Box fontWeight="bold" display="inline" component="span">
              Hint:{" "}
            </Box>
            if you are unsure about which labs you need, check your prescription
            or contact your doctor.
          </Typography>
          <TextField
            fullWidth
            id="filled-basic"
            label="Search lab tests"
            variant="filled"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="h4">Select all that apply</Typography>
        </Box>
        <Alert severity="error">Please select at least one test</Alert>
      </Box>
      <Box>
        <Typography variant="h5" px="30px">
          Hematology
        </Typography>
        <Box px="30px" sx={{ backgroundColor: theme.palette.purple.light }}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Box>
                  <Typography>Blood Film for Malaria</Typography>
                  <Typography variant="caption">
                    Price range: GH$1 - GH$2
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Box>
                  <Typography>Blood Film for Malaria</Typography>
                  <Typography variant="caption">
                    Price range: GH$1 - GH$2
                  </Typography>
                </Box>
              }
            />
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Box>
                  <Typography>Blood Film for Malaria</Typography>
                  <Typography variant="caption">
                    Price range: GH$1 - GH$2
                  </Typography>
                </Box>
              }
            />
          </FormGroup>
        </Box>
      </Box>
    </Box>
  );
}

export default LabTests;
