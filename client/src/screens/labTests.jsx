import {
  Box,
  Typography,
  useTheme,
  TextField,
  LinearProgress,
} from "@mui/material";

function LabTests() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 7, // accomodate for navbar, TODO: alter on navbar size change
      }}
    >
      <LinearProgress variant="determinate" value={5} />
      <Box align="center" px="30px">
        <Typography variant="h1">Select lab tests</Typography>
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
        />
      </Box>
    </Box>
  );
}

export default LabTests;
