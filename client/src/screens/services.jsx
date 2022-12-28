import React from "react";
import { Box, Typography } from "@mui/material";
import ServicesPageCard from "../components/servicesPageCard";
import PriceRangeList from "../components/priceRangeList";

function Services() {
  return (
    <Box>
      <Box sx={{ background: "black", height: "188px" }}>placeholder image</Box>
      <Box margin="0 16px">
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
          <PriceRangeList
            items={[
              "Lorem ipsum dolor: GH$1 - GH$2",
              "Sit amet, consetetur: GH$1 - GH$2",
              "Sadipscing elitr: GH$1 - GH$2",
              "Sed diam nonumy eirmod: GH$1 - GH$2",
            ]}
          />
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
          <PriceRangeList
            items={[
              "Lorem ipsum dolor: GH$1 - GH$2",
              "Sit amet, consetetur: GH$1 - GH$2",
              "Sadipscing elitr: GH$1 - GH$2",
              "Sed diam nonumy eirmod: GH$1 - GH$2",
            ]}
          />
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
          <PriceRangeList
            items={[
              "Lorem ipsum dolor: GH$1 - GH$2",
              "Sit amet, consetetur: GH$1 - GH$2",
              "Sadipscing elitr: GH$1 - GH$2",
              "Sed diam nonumy eirmod: GH$1 - GH$2",
            ]}
          />
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
            Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            eos et accusam et justo duo dolores et ea rebum. <br /> <br /> Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
            sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. <br /> <br /> Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. <br /> <br /> At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus.
          </Typography>
          <PriceRangeList
            items={[
              "Lorem ipsum dolor: GH$1 - GH$2",
              "Sit amet, consetetur: GH$1 - GH$2",
              "Sadipscing elitr: GH$1 - GH$2",
              "Sed diam nonumy eirmod: GH$1 - GH$2",
            ]}
          />
        </ServicesPageCard>
      </Box>
    </Box>
  );
}

export default Services;
