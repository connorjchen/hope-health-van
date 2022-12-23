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
  const [date, setDate] = useState(dayjs());

  return (
    <Box>
      <ProgressHeader title="Group Health Check" progress={50} />
      <Box px="30px">
        <Box align="center">
          <Typography variant="h3">Complete the request form below</Typography>
          <Typography variant="subtitle1" mb="15px">
            Please fill out all the fields to help us prepare for your visit.
          </Typography>
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
        </Box>
        <TextField
          fullWidth
          label="Name"
          placeholder="Please enter your name"
          variant="filled"
          color="secondary"
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
            },
          }}
        />
        <TextField
          fullWidth
          label="Organization"
          placeholder="Please enter your organization's name"
          variant="filled"
          color="secondary"
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
            },
          }}
        />
        <TextField
          fullWidth
          label="Phone number"
          placeholder="Please enter your phone number"
          variant="filled"
          color="secondary"
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
            },
          }}
        />
        <TextField
          fullWidth
          label="Email address"
          placeholder="Please enter your email address"
          variant="filled"
          color="secondary"
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
            },
          }}
        />
        <Typography variant="subtitle1" my="15px" align="center">
          Please select a date for the appointment. <br />
          Keep in mind that we cannot guarantee the date you request will be
          available.
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date mobile"
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
          sx={{
            mb: "16px",
            background: theme.palette.purple.input,
            "& .MuiFilledInput-root": {
              backgroundColor: "inherit",
              fontSize: "16px",
            },
          }}
        />
        <Box align="center">
          <Button
            onClick={() => navigate("/booking/group")}
            sx={{
              ...theme.purpleButton,
              px: "40px",
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default GroupHealthCheck;
