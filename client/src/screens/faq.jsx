import React from "react";
import {
  Box,
  Typography,
  Divider,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
} from "@mui/material";
import FaqPageCard from "../components/faqPageCard";

const faqs = [
  [
    "Question question question",
    "Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet bibendum metus et consectetur. Nunc malesuada et ligula id vehicula.",
  ],
  [
    "Question question question",
    "Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet bibendum metus et consectetur. Nunc malesuada et ligula id vehicula.",
  ],
  [
    "Question question question",
    "Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet bibendum metus et consectetur. Nunc malesuada et ligula id vehicula.",
  ],
  [
    "Question question question",
    "Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet bibendum metus et consectetur. Nunc malesuada et ligula id vehicula.",
  ],
];

function Faq() {
  const theme = useTheme();

  return (
    <Box>
      <Box sx={{ background: "black", height: "188px" }}>placeholder image</Box>
      <Box
        sx={{
          maxWidth: "md",
          mx: { xs: "0px", md: "auto" },
        }}
      >
        <Typography variant="h1" mt="32px" mb="24px">
          FAQ
        </Typography>
        {faqs.map((faq) => (
          <FaqPageCard question={faq[0]} answer={faq[1]} />
        ))}
      </Box>
    </Box>
  );
}

export default Faq;
