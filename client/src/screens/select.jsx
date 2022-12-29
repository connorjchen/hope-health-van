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
import React, { useState } from "react";

export const serviceConstants = {
  labservices: {
    title: "Lab Services",
    subheader: "Select lab test(s)",
    error: "Please select at least one lab test",
    calendly: "https://calendly.com/okb-hope-health/okb-health-clinic",
    options: {
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
    },
  },
  mobilevan: {
    title: "Mobile Van",
    subheader: "Select service(s)",
    error: "Please select one service",
    calendly: "https://calendly.com/okb-hope-health/okb-mobile-van",
    options: {
      Hematology: [
        ["Blood Film for Malaria", 1, 2],
        ["Blood grouping", 1, 2],
      ],
      Microbiology: [
        ["H. Pylori", 1, 2],
        ["HVS R/E", 1, 2],
      ],
      Biochemistry: [
        ["AFP", 1, 2],
        ["Calcium estimates", 1, 2],
      ],
    },
  },
  telehealth: {
    title: "Telehealth",
    subheader: "Select service(s)",
    error: "Please select at least one service",
    calendly: "https://calendly.com/okb-hope-health/okb-health-clinic",
    options: {
      Services: [
        ["Service 1", 1],
        ["Service 2", 1],
        ["Service 3", 1],
      ],
    },
  },
};

function Select() {
  const theme = useTheme();
  const navigate = useNavigate();
  const { service } = useParams();
  const constants = serviceConstants[service];
  const [optionsSelected, setOptionsSelected] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const handleSelectOption = (option, lo, hi) => {
    if (optionsSelected.includes(option)) {
      setOptionsSelected(optionsSelected.filter((o) => o !== option));
      setMinPrice(minPrice - lo);
      setMaxPrice(maxPrice - hi ?? 0);
    } else {
      setOptionsSelected([...optionsSelected, option]);
      setMinPrice(minPrice + lo);
      setMaxPrice(maxPrice + hi ?? 0);
    }
  };

  const handleNextButtonClick = () => {
    if (optionsSelected.length > 0) {
      navigate(`/booking/${service}/calendar`, {
        state: { optionsSelected, minPrice, maxPrice },
      });
    } else {
      setError(true);
    }
  };

  const renderSelectOptions = () => {
    if (service === "labservices" || service === "mobilevan") {
      return (
        <>
          <Typography variant="subtitle1" mb="15px">
            <Box fontWeight="bold" display="inline" component="span">
              Hint:{" "}
            </Box>
            if you are unsure about which services you need, check your
            prescription or contact your doctor.
          </Typography>
          <TextField
            fullWidth
            label="Search lab tests"
            variant="filled"
            color="secondary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              background: theme.palette.purple.input,
              "& .MuiFilledInput-root": {
                backgroundColor: "inherit",
                "&:hover": {
                  backgroundColor: "inherit",
                },
              },
            }}
          />
        </>
      );
    }
    // none for telehealth
  };

  const Caption = ({ lo, hi }) => {
    if (service === "labservices" || service === "mobilevan") {
      return (
        <Typography variant="caption">
          Price range: GH${lo} - GH${hi}
        </Typography>
      );
    } else if (service === "telehealth") {
      return <Typography variant="caption">Price: GH${lo}</Typography>;
    }
  };

  return (
    <Box>
      <ProgressHeader
        title={constants.title}
        onBack={() => navigate("/")}
        progress={5}
      />
      <Box
        sx={{
          maxWidth: "md",
          mx: { xs: "30px", md: "auto" },
        }}
      >
        <Box align="center">
          <Typography variant="h3">{constants.subheader}</Typography>
          {renderSelectOptions()}
          <Typography variant="h4">Select all that apply</Typography>
        </Box>
        {error && (
          <Alert
            severity="error"
            sx={{
              mb: "16px",
              backgroundColor: "inherit",
              "& .MuiAlert-message": {
                color: theme.palette.primary.error,
                fontSize: "14px",
              },
            }}
          >
            {constants.error}
          </Alert>
        )}
      </Box>
      {Object.keys(constants.options).map((title) => {
        return (
          <Box
            mb="30px"
            key={title}
            sx={{
              maxWidth: "md",
              mx: { xs: "0", md: "auto" },
            }}
          >
            <Typography variant="h5" px="30px">
              {title}
            </Typography>
            <Box px="30px" sx={{ backgroundColor: theme.palette.purple.light }}>
              <FormGroup>
                {constants.options[title].map(([test, lo, hi]) => {
                  if (
                    searchTerm === "" ||
                    test.toLowerCase().includes(searchTerm)
                  ) {
                    return (
                      <FormControlLabel
                        key={test}
                        control={<Checkbox />}
                        label={
                          <Box>
                            <Typography variant="body1">{test}</Typography>
                            <Caption lo={lo} hi={hi} />
                          </Box>
                        }
                        onChange={() => handleSelectOption(test, lo, hi)}
                      />
                    );
                  }
                })}
              </FormGroup>
            </Box>
          </Box>
        );
      })}
      <Box align="center">
        <Button
          onClick={handleNextButtonClick}
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
