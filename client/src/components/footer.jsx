import React from "react";
import { Box, Divider, Typography, Link } from "@mui/material";

const FooterText = ({ text, url }) => {
  return (
    <Link href={url}>
      <Typography variant="body1">{text}</Typography>
    </Link>
  );
};

function Footer() {
  return (
    <Box marginTop="32px">
      <Divider />
      <Box margin="16px">
        {/* <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="16px"
        >
          <FooterText text="Our Services" url="/services" />
          <FooterText text="Work With Us" url="/volunteer" />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FooterText text="FAQ" url="/faq" />
          <FooterText text="About Us" url="/about" />
        </Box> */}
        <FooterText text="Our Services" url="/services" />
        <FooterText text="FAQ" url="/faq" />
        <FooterText text="About Us" url="/about" />
      </Box>
    </Box>
  );
}

export default Footer;
