import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const VolunteerPageCard = ({ image, role, description }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        padding: "16px",
        borderRadius: "12px",
        background: theme.palette.blue.light,
        marginBottom: "16px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: "56px",
          width: "56px",
          borderRadius: "12px",
          marginRight: "16px",
        }}
        src={image}
      />
      <Box>
        <Typography variant="h6">{role}</Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  );
};

export default VolunteerPageCard;
