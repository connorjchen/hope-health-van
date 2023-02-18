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
    "Can I walk in to receive services?",
    "Yes. However, we encourage you to either book an appointment online or call us to book for you. We don’t want you to wait.",
  ],
  [
    "Where is your office located?",
    "Our office is located at Tech Junction. Behind Juliponia Pharmacy.",
  ],
  [
    "Do you accept health insurance?",
    `Currently, we only accept cash and mobile money. However, we are working tirelessly to be able to accept
    other forms of insurance. We will let you know when are able to accept insurance.`,
  ],
  [
    "Do you provide emergency services?",
    "No, we only provide primary care and diagnostics – that’s what we do best!",
  ],
  [
    "What should I expect from my primary care team at OKB Hope Health?",
    `We believe primary care should be the first stop in your healthcare journey; it’s where you turn for
    guidance and support before you get sick, before you see a specialist, and before you need to seek
    hospital care. Our providers combine excellent customer service with an efficient use of technology to
    deliver high-quality, affordable service that’s designed to fit your unique needs. At OKB Hope Health we
    take your well-being seriously.`,
  ],
  [
    "How is OKB Hope Health different from other practices?",
    `Our philosophy is rooted in quality care, patient-centered design, and a smart application of
    technology. In order to deliver the best preventive medicine, acute care, and chronic condition
    management, we provide our certified medical professionals the time and tools to make the best
    decisions for your health. Each of our healthcare providers places a strong emphasis on fostering patient-provider relationships
    based on trust and mutual understanding, taking the time to get to know you and your unique health
    story. We aim to be your long-term health care advocates, partnering with you to manage your health
    issues and navigate complex medical decisions. By using diagnostic tests appropriately and avoiding
    overdiagnosis or unnecessary prescriptions, we empower you to make positive changes in your health
    and your life with newfound knowledge, awareness, support, and guidance. We stay by your side every
    step of the way, making sure you understand how to continue your progress once you leave the office.
    Above all else, we treat you as a whole person, not just a collection of symptoms. We take all aspects of
    your health and lifestyle into consideration, and care for you in a holistic manner that helps you restore
    and maintain optimal health.`,
  ],
  [
    "Are there diagnostic services at OKB Hope Health?",
    `OKB Hope Health offers on-site laboratory services on an appointment and walk-in basis. Our medical
    staff will put you at ease, draw your blood and collect other specimens in an anxiety-free environment,
    and get you on your way quickly. After we receive and review your results, we will promptly call you
    with our interpretation and email you a copy of the report. Our health care provider will order the
    specific tests you need based on your age, your medications, your overall health status and the amount
    of time since your last set of blood tests.`,
  ],
];

function Faq() {
  const theme = useTheme();

  return (
    <Box>
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
