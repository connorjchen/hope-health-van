import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

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
      <Typography variant="h5" my="6px">
        {question}
      </Typography>
      <Typography variant="caption">{answer}</Typography>
    </Box>
  );
};

export default FaqPageCard;
