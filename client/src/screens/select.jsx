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
    subheader: "Select lab tests",
    error: "Please select at least one lab test",
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
    subheader: "Select locations(s)",
    error: "Please select at least one location",
    options: {
      "Region 1": [["Location A"], ["Location B"], ["Location C"]],
      "Region 2": [["Location A"], ["Location B"], ["Location C"]],
      "Region 3": [["Location A"], ["Location B"], ["Location C"]],
    },
  },
  telehealth: {
    title: "Telehealth",
    subheader: "Select service(s)",
    error: "Please select at least one service",
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
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);

  const handleSelectOption = (option) => {
    if (optionsSelected.includes(option)) {
      setOptionsSelected(optionsSelected.filter((o) => o !== option));
    } else {
      setOptionsSelected([...optionsSelected, option]);
    }
  };

  const handleNextButtonClick = () => {
    if (optionsSelected.length > 0) {
      navigate(`/booking/${service}/calendar`, {
        state: { optionsSelected },
      });
    } else {
      setError(true);
    }
  };

  const renderSelectOptions = () => {
    if (service === "labservices") {
      return (
        <>
          <Typography variant="subtitle1" mb="15px">
            <Box fontWeight="bold" display="inline" component="span">
              Hint:{" "}
            </Box>
            if you are unsure about which labs you need, check your prescription
            or contact your doctor.
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
    } else if (service === "mobilevan") {
      return (
        <>
          <p>services select thingy</p>
        </>
      );
    }
    // none for telehealth
  };

  const Caption = ({ lo, hi }) => {
    if (service === "labservices") {
      return (
        <Typography variant="caption">
          Price range: GH${lo} - GH${hi}
        </Typography>
      );
    } else if (service === "telehealth") {
      return <Typography variant="caption">Price: GH${lo}</Typography>;
    }
    // none for mobilevan
  };

  return (
    <Box>
      <ProgressHeader
        title={constants.title}
        onBack={() => navigate("/")}
        progress={5}
      />
      <Box px="30px">
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
          <Box mb="30px" key={title}>
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
                            <Typography>{test}</Typography>
                            <Caption lo={lo} hi={hi} />
                          </Box>
                        }
                        onChange={() => handleSelectOption(test)}
                      />
                    );
                  }
                })}
              </FormGroup>
            </Box>
          </Box>
        );
      })}
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
