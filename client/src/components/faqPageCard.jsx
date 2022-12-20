import React from "react";
import { Box, Typography, List, ListItem, useTheme } from "@mui/material";

const FaqPageCard = ({ question, answer }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid",
        borderColor: theme.palette.primary.outline,
        borderRadius: "12px",
        background: theme.palette.purple.light,
        marginBottom: "16px",
      }}
    >
      <Typography variant="h6">{question}</Typography>
      <Typography variant="body1">{answer}</Typography>
    </Box>
  );
};

export default FaqPageCard;
