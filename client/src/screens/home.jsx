import React from "react";
import { Box, Typography } from "@mui/material";
import HomePageCard from "../components/homePageCard";

function Home() {
  return (
    <Box>
      <Box sx={{ background: "black", height: "188px" }}>placeholder image</Box>
      <Box
        sx={{
          maxWidth: "md",
          mx: { xs: "16px", md: "auto" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginTop: "32px",
            marginBottom: "24px",
          }}
        >
          Bringing healthcare to your doorsteps
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          For individual patients
        </Typography>
        <HomePageCard
          title="Lab Services"
          location="in our clinic"
          description="Our comprehensive test menu provides routine and specialty diagnostic testing and screening for multiple diseases and conditions."
          buttonText="Book Lab Services"
          buttonUrl="/booking/labservices/select"
        />
        <HomePageCard
          title="Mobile Van"
          location="across Ghana"
          description="Our Health Vans are mini traveling hospitals that treat people in real-time. 
          Our Vans are equipped with multiple point-of-care lab diagnostics, healthcare providers, and a vast array of medicines for immediate patient care."
          buttonText="Book Mobile Van"
          buttonUrl="/booking/mobilevan/select"
        />
        <HomePageCard
          title="Telehealth"
          location="across Ghana"
          description="Our virtual care platform is a convenient, secure way to chat with our healthcare providers using your computer, laptop, tablet, or smartphone. 
          We provide general consultation, chronic disease management, and second opinion."
          buttonText="Book Online Appointment"
          buttonUrl="/booking/telehealth/select"
        />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          For groups
        </Typography>
        <HomePageCard
          title="Health Check"
          location="across Ghana"
          description="paragraph (approx 5 sentences) Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet bibendum metus Price range: GH$1 - GH$2"
          buttonText="Book for a Group"
          buttonUrl="/booking/group"
        />
      </Box>
    </Box>
  );
}

export default Home;
