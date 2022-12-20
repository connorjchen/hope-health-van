import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";

function HomePageCard({ title, location, description, buttonText }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid #CAC4D0",
        borderRadius: "12px",
        background: theme.palette.purple.light,
        marginBottom: "16px",
      }}
    >
      <Box display="flex" marginBottom="16px">
        <Box
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: theme.palette.purple.dark,
            color: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "16px",
          }}
        >
          A
        </Box>
        <Box>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body1">{location}</Typography>
        </Box>
      </Box>
      <Typography variant="body1" marginBottom="12px">
        {description}
      </Typography>
      <Button
        sx={{
          ...theme.purpleButton,
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default HomePageCard;
