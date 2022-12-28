import {
  Box,
  Typography,
  useTheme,
  TextField,
  Alert,
  Button,
} from "@mui/material";
import ProgressHeader from "../components/progressHeader";
import { useNavigate } from "react-router-dom";
import {
  MobileDatePicker,
  LocalizationProvider,
  DesktopDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React, { useState } from "react";

function GroupHealthCheck() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [request, setRequest] = useState("");
  const [error, setError] = useState(false);

  const handleButtonClick = () => {
    if (!name || !organization || !phoneNumber || !email || !date || !request) {
      setError(true);
      return;
    }
    console.log({
      name,
      organization,
      phoneNumber,
      email,
      date, // format date to backend preferred format
      request,
    }); // send email to info@okbfoundation.org or have backend do it
    // if send is successful, navigate
    navigate("/booking/group/confirmation");
  };

  return (
    <Box>
      <ProgressHeader title="Group Health Check" progress={50} />
      <Box px="30px">
        <Box align="center">
          <Typography variant="h3">Complete the request form below</Typography>
          <Typography variant="subtitle1" my="24px">
            Please fill out all the fields to help us prepare for your visit.
          </Typography>
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
              Please fill out all the fields
            </Alert>
          )}
        </Box>
        <TextField
          fullWidth
          label="Name"
          placeholder="Please enter your name"
          variant="filled"
          color="secondary"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
              "&:hover": {
                backgroundColor: "inherit",
              },
            },
          }}
        />
        <TextField
          fullWidth
          label="Organization"
          placeholder="Please enter your organization's name"
          variant="filled"
          color="secondary"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
              "&:hover": {
                backgroundColor: "inherit",
              },
            },
          }}
        />
        <TextField
          fullWidth
          label="Phone number"
          placeholder="Please enter your phone number"
          variant="filled"
          color="secondary"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
              "&:hover": {
                backgroundColor: "inherit",
              },
            },
          }}
        />
        <TextField
          fullWidth
          label="Email address"
          placeholder="Please enter your email address"
          variant="filled"
          color="secondary"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <Typography variant="subtitle1" my="24px" align="center">
          Please select a date for the appointment. <br />
          Keep in mind that we cannot guarantee the date you request will be
          available.
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => (
              <TextField
                {...params}
                fullWidth
                color="secondary"
                sx={{
                  mb: "16px",
                  background: theme.palette.purple.input,
                  "& .MuiFilledInput-root": {
                    backgroundColor: "inherit",
                    "&:hover": {
                      backgroundColor: "inherit",
                    },
                  },
                }}
              />
            )}
          />
        </LocalizationProvider>
        <TextField
          fullWidth
          label="Request"
          multiline
          rows={4}
          placeholder="Describe your request"
          variant="filled"
          color="secondary"
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          sx={{
            mb: "40px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "inherit",
              },
            },
          }}
        />
        <Box align="center">
          <Button
            onClick={handleButtonClick}
            sx={{
              ...theme.purpleButton,
              px: "40px",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GroupHealthCheck;
