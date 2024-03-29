import React from "react";
import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import VolunteerPageCard from "../components/volunteerPageCard";

const roles = [
  [
    "https://picsum.photos/200",
    "Volunteer role",
    "Supporting line text lorem ipsum dolor sit amet, consectetur",
  ],
  [
    "https://picsum.photos/200",
    "Volunteer role",
    "Supporting line text lorem ipsum dolor sit amet, consectetur",
  ],
  [
    "https://picsum.photos/200",
    "Volunteer role",
    "Supporting line text lorem ipsum dolor sit amet, consectetur",
  ],
  [
    "https://picsum.photos/200",
    "Volunteer role",
    "Supporting line text lorem ipsum dolor sit amet, consectetur",
  ],
];

function Volunteer() {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "md",
          mx: { xs: "0px", md: "auto" },
        }}
      >
        <Box mx="16px">
          <Typography variant="h5" mt="32px" mb="24px">
            Volunteer with us
          </Typography>
          <Button sx={{ ...theme.blueButton }}>Sign Up</Button>
        </Box>
        <Divider
          sx={{
            my: "24px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h5" mt="32px" mb="24px">
            How you can help
          </Typography>
          {roles.map((role) => (
            <VolunteerPageCard
              image={role[0]}
              role={role[1]}
              description={role[2]}
            />
          ))}
        </Box>
        <Divider
          sx={{
            my: "24px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h5" mb="24px">
            Training
          </Typography>
          <Typography variant="body1">PLACEHOLDER TEXT</Typography>
        </Box>
        <Divider
          sx={{
            my: "24px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h5" mb="24px">
            Time Commitment
          </Typography>
          <Typography variant="body1">PLACEHOLDER TEXT</Typography>
        </Box>
        <Divider
          sx={{
            my: "24px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h5" mb="24px">
            Locations
          </Typography>
          <Typography variant="body1">PLACEHOLDER TEXT</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Volunteer;
