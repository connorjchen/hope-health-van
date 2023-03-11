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
  Modal,
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
    calendly: "https://calendly.com/okb-hope-health/lab-tests",
    options: {
      Hematology: [
        ["Full Blood Count", 40],
        ["ESR", 30],
        ["Hb", 10],
        ["Sickling Test", 30],
        ["Thyroid Function Test", 180],
        ["Blood Grouping", 20],
      ],
      "Immunology and Serology": [
        ["Hepatitis B", 15],
        ["Hepatitis B Profile", 60],
        ["Hepatitis C", 15],
        ["VDRL", 20],
        ["Retro Screen", 25],
        ["RDT for Malaria", 10],
        ["Serum Pregnancy Test", 30],
        ["Urine Pregnancy Test", 25],
      ],
      Microbiology: [
        ["H-Pylori", 25],
        ["Typhi Dot (Widal Test)", 25],
        ["Stool RE", 30],
        ["Gonorrhoea", 40],
        ["Chlamydia", 30],
        ["Urine Culture", 100],
        ["Urine RE", 30],
      ],
      Biochemistry: [
        ["HbA1c", 80],
        ["Fasting Blood Sugar", 10],
        ["Beta HCG", 130],
        ["Blood Film Comment", 160],
        ["Glycated Hemoglobin", 80],
        ["Liver Function Test", 80],
        ["Renal Function Test", 80],
        ["Lipid Profile", 80],
        ["INR", 80],
        ["Uric Acid", 75],
        ["Hb Electrophoresis", 35],
        ["D-Dimer", 200],
        ["Leutinizing Hormone", 75],
        ["Progesterone", 75],
        ["Prolactin", 75],
        ["Prostate Specific Antigen", 75],
      ],
    },
  },
  mobilevan: {
    title: "Mobile Van",
    subheader: "Select service(s)",
    error: "Please select one service",
    calendly: "https://calendly.com/okb-hope-health/mobile-van",
    options: {
      Hematology: [
        ["Hb", 10],
        ["ESR", 30],
        ["Sickling Test", 30],
        ["Blood Grouping", 20],
        ["Hb Electrophoresis", 50],
        ["Blood Film for Malaria Parasites", 25],
      ],
      "Immunology and Serology": [
        ["Hepatitis B", 15],
        ["Hepatitis B Profile", 60],
        ["Hepatitis C", 15],
        ["VDRL", 20],
        ["Retro Screen", 25],
        ["RDT for Malaria", 10],
        ["Urine Pregnancy Test", 25],
      ],
      Microbiology: [
        ["H-Pylori", 25],
        ["Typhi Dot (Widal Test)", 25],
        ["Stool RE", 30],
        ["Urine RE", 30],
      ],
      Biochemistry: [
        ["HbA1c", 80],
        ["Fasting Blood Sugar", 10],
      ],
    },
  },
  telehealth: {
    title: "Telehealth",
    subheader: "Select service(s)",
    error: "Please select at least one service",
    calendly: "https://calendly.com/okb-hope-health/telehealth",
    options: {
      Services: [
        ["General consultation", 20],
        ["Mental Health Consultation", 50],
        ["Eye Service Consultation", 45],
        ["Weight Loss and Nutrition Consultation", 50],
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
  const [costEstimate, setCostEstimate] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(false);
  const [modalOpen, setModalOpen] = useState(true);

  const handleSelectOption = (option, cost) => {
    if (optionsSelected.includes(option)) {
      setOptionsSelected(optionsSelected.filter((o) => o !== option));
      setCostEstimate(costEstimate - cost);
    } else {
      setOptionsSelected([...optionsSelected, option]);
      setCostEstimate(costEstimate + cost);
    }
  };

  const handleNextButtonClick = () => {
    if (optionsSelected.length > 0) {
      navigate(`/booking/${service}/calendar`, {
        state: { optionsSelected, costEstimate },
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
              ...theme.blueInput,
            }}
          />
        </>
      );
    }
    // none for telehealth
  };

  return (
    <Box>
      {service === "labservices" && (
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "300px",
              bgcolor: theme.palette.blue.light,
              outline: "none",
              borderRadius: "16px",
              boxShadow:
                "0px 2px 16px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
              p: 4,
            }}
          >
            <Typography variant="h1" mb="16px">
              OKB Hope Clinic
            </Typography>
            <Typography variant="subtitle1" mb="16px">
              Our lab tests are performed in our clinic. To avoid any delay,
              make sure to arrive on time.
            </Typography>
            <Typography variant="subtitle1">
              Our clinic is located in Kumasi:
              <span style={{ fontWeight: "bold" }}>
                <br />
                Tech Junction <br /> Behind Juliponia Pharmacy
              </span>
            </Typography>
            <Typography
              variant="subtitle1"
              onClick={() => setModalOpen(false)}
              sx={{
                mt: "20px",
                color: theme.palette.blue.dark,
                cursor: "pointer",
                textAlign: "right",
              }}
            >
              Continue to booking
            </Typography>
          </Box>
        </Modal>
      )}
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
            <Box px="30px" sx={{ backgroundColor: theme.palette.blue.light }}>
              <FormGroup>
                {constants.options[title].map(([test, cost]) => {
                  if (
                    searchTerm === "" ||
                    test.toLowerCase().includes(searchTerm)
                  ) {
                    return (
                      <FormControlLabel
                        key={test}
                        checked={optionsSelected.includes(test)}
                        control={<Checkbox />}
                        label={
                          <Box>
                            <Typography variant="body1">{test}</Typography>
                            <Typography variant="caption">
                              {`Price estimate: GH${cost}`}
                            </Typography>
                          </Box>
                        }
                        onChange={() => handleSelectOption(test, cost)}
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
            ...theme.blueButton,
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
