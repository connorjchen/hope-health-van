import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

function HomePageCard({
  title,
  location,
  description,
  image,
  buttonText,
  buttonUrl,
}) {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: "16px",
        border: "1px solid",
        borderColor: theme.palette.primary.outline,
        borderRadius: "12px",
        background: theme.palette.blue.light,
        marginBottom: "16px",
      }}
    >
      <Box display="flex" marginBottom="16px" alignItems="center">
        <Box
          sx={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: theme.palette.blue.dark,
            color: theme.palette.primary.main,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "16px",
          }}
          component="img"
          src={image}
          alt="icon"
        />
        <Box>
          <Typography variant="h5" m="0">
            {title}
          </Typography>
          <Typography variant="caption" sx={{ margin: "0px" }}>
            {location}
          </Typography>
        </Box>
      </Box>
      <Box mb="12px">
        <Typography variant="caption">{description}</Typography>
      </Box>
      <Button
        onClick={() => navigate(buttonUrl)}
        sx={{
          ...theme.blueButton,
          marginLeft: "auto",
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
}

export default HomePageCard;
