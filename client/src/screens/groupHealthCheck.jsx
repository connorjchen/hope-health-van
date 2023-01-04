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
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import React, { useState } from "react";
import Axios from "axios";

const baseUrl = "http://ec2-3-92-226-174.compute-1.amazonaws.com:4000/booking";

function GroupHealthCheck() {
  dayjs.extend(utc);
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
      date,
      request,
    });

    Axios.post(`${baseUrl}/grouphealthcheck`, {
      name: name,
      organization: organization,
      phone: phoneNumber,
      email: email,
      selectedDate: dayjs(date).utc().format("h:mm A dddd, MMMM D YYYY"),
      request: request,
    })
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
      .then(() => navigate("/booking/group/confirmation"));
  };

  return (
    <Box>
      <ProgressHeader
        title="Group Health Check"
        progress={50}
        onBack={() => navigate(`/`)}
      />
      <Box
        sx={{
          maxWidth: "md",
          mx: { xs: "30px", md: "auto" },
        }}
      >
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
            ...theme.purpleInput,
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
            ...theme.purpleInput,
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
            ...theme.purpleInput,
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
            ...theme.purpleInput,
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
                  ...theme.purpleInput,
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
            ...theme.purpleInput,
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
