import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ServicesPageCard({ children, title, buttonText, buttonUrl }) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>
      {children}
      <Button
        onClick={() => navigate(buttonUrl)}
        sx={{
          ...theme.purpleButton,
          marginLeft: "auto",
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default ServicesPageCard;
