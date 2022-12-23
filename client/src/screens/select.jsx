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

const tests = {
  Hematology: [
    ["Blood Film for Malaria", 1, 2],
    ["Blood grouping", 1, 2],
    ["Clotting profile (Pt, Aptt, D-dimers)", 1, 2],
    ["ESR", 1, 2],
    ["FBC", 1, 2],
    ["Retro Screen", 1, 2],
    ["Sickle cell electrophoresis", 1, 2],
    ["UPT", 1, 2],
  ],
  Microbiology: [
    ["H. Pylori", 1, 2],
    ["HVS R/E", 1, 2],
    ["Stool RE", 1, 2],
    ["Urine RE", 1, 2],
    ["Widal test", 1, 2],
  ],
  Biochemistry: [
    ["AFP", 1, 2],
    ["Calcium estimates", 1, 2],
    ["CRP", 1, 2],
    ["Electrolytes", 1, 2],
    ["FSH", 1, 2],
    ["HBA1c", 1, 2],
    ["LH", 1, 2],
    ["Lipids", 1, 2],
    ["Liber Function test", 1, 2],
    ["Oestrogen", 1, 2],
    ["OGTT", 1, 2],
    ["Progesterone", 1, 2],
    ["PSA", 1, 2],
    ["Renal Function test", 1, 2],
    ["TFT (TSH, T3, T4)", 1, 2],
    ["Uric Acid", 1, 2],
  ],
};

function Select() {
  const theme = useTheme();
  const navigate = useNavigate();
  let { service } = useParams();

  return (
    <Box>
      <ProgressHeader
        title={service}
        onBack={() => navigate("/")}
        progress={5}
      />
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
      {Object.keys(tests).map((title) => {
        return (
          <Box mb="30px">
            <Typography variant="h5" px="30px">
              {title}
            </Typography>
            <Box px="30px" sx={{ backgroundColor: theme.palette.purple.light }}>
              <FormGroup>
                {tests[title].map(([test, lo, hi]) => {
                  return (
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <Box>
                          <Typography>{test}</Typography>
                          <Typography variant="caption">
                            Price range: GH${lo} - GH${hi}
                          </Typography>
                        </Box>
                      }
                    />
                  );
                })}
              </FormGroup>
            </Box>
          </Box>
        );
      })}
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

export default Select;
