import React from "react";
import { Box, Divider, Typography } from "@mui/material";

const FooterText = ({ children }) => {
  return <Typography variant="body1">{children}</Typography>;
};

function Footer() {
  return (
    <Box marginTop="32px">
      <Divider />
      <Box margin="16px">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="16px"
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
