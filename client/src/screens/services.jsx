import React from "react";
import { Box, Typography } from "@mui/material";
import ServicesPageCard from "../components/servicesPageCard";
import PriceRangeList from "../components/priceRangeList";

function Services() {
  return (
    <Box>
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
          Our Services
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
        <ServicesPageCard
          title="Lab Services"
          buttonText="Book Lab Services"
          buttonUrl="/booking/labservices/select"
        >
          <Typography variant="caption" margin="16px 0">
            Every day, we're helping healthcare providers treat millions of
            patients as individuals. <br /> <br /> Our comprehensive test menu
            provides routine and specialty diagnostic testing and screening for
            multiple diseases and conditions. Whether you're looking for tests
            to detect and monitor chronic conditions like diabetes or chronic
            kidney disease, or you are seeking screening options for diseases
            like liver disease, we can help you and your patients get answers.
          </Typography>
        </ServicesPageCard>
        <ServicesPageCard
          title="Mobile Van"
          buttonText="Book Mobile Van"
          buttonUrl="/booking/mobilevan/select"
        >
          <Typography variant="caption" margin="16px 0">
            Our Hope Health Vans are mini traveling hospitals that treat people
            in real-time. Our Health Vans are equipped with multiple
            point-of-care lab diagnostics, healthcare providers, and a vast
            array of medicines for immediate patient care.
          </Typography>
        </ServicesPageCard>
        <ServicesPageCard
          title="Telehealth"
          buttonText="Book Online Appointment"
          buttonUrl="/booking/telehealth/select"
        >
          <Typography variant="caption" margin="16px 0">
            Our virtual care platform is a convenient, secure way to chat with
            our healthcare providers using your computer, laptop, tablet, or
            smartphone.
            <br /> <br /> No more worrying about how you will get to the
            hospital when you’re sick or when you can’t leave work. Just connect
            with your desktop, laptop, tablet, or smartphone, and our certified
            healthcare professionals will be available to provide you with
            quality care. Let us help you navigate the new normal of virtual
            healthcare.
            <br /> <br />
            We provide general consultation, chronic disease management, and
            second opinion.
          </Typography>
        </ServicesPageCard>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          For groups
        </Typography>
        <ServicesPageCard
          title="Health Check"
          buttonText="Book for a Group"
          buttonUrl="/booking/group"
        >
          <Typography variant="caption" margin="16px 0">
            Whether you are a corporate body, faith-based organization, or a
            group of people seeking healthcare, our Hope Health Van is here to
            provide you with quality and affordable healthcare right at your
            doorsteps. Our Health Vans are equipped with multiple point-of-care
            lab diagnostics, healthcare providers, and a vast array of medicines
            for patient care. 
            <br /> <br /> We provide routine checkups and comprehensive lab
            services.
          </Typography>
        </ServicesPageCard>
      </Box>
    </Box>
  );
}

export default Services;
