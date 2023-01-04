import React from "react";
import { Box, Typography, useTheme, Button, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Alert variant="filled" severity="error">
        404 This page does not exist
      </Alert>
      <Typography variant="h3" mt="32px">
        <Button
          onClick={() => navigate("/")}
          sx={{
            ...theme.purpleButton,
          }}
        >
          Go to home page
        </Button>
      </Typography>
    </Box>
  );
}

export default NotFound;
