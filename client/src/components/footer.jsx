import * as React from "react";
import { Box, Divider, Typography } from "@mui/material";

const FooterText = ({ children }) => {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "0.25px",
      }}
    >
      {children}
    </Typography>
  );
};

function Footer() {
  return (
    <Box marginTop="40px">
      <Divider />
      <Box margin="20px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="20px"
        >
          <FooterText>Our Services</FooterText>
          <FooterText>Work With Us</FooterText>
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FooterText>FAQ</FooterText>
          <FooterText>About Us</FooterText>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
