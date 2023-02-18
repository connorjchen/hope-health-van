import React from "react";
import {
  Box,
  Typography,
  Divider,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  useTheme,
} from "@mui/material";
import hamza from "../assets/hamza.jpg";
import justice from "../assets/justice.jpg";
import kwame from "../assets/kwame.jpeg";
import erica from "../assets/erica.jpg";

const profiles = [
  [justice, "Justice Awulley-Quaye", "Medical Director"],
  [kwame, "Kwame Adu-Boampong", "Operations Director"],
  [hamza, "Alhassan Hassan", "Doctor of Laboratory Services"],
  [erica, "Erica Gyasi", "Nurse"],
];

function ProfileCard({ image, name, role }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        borderRadius: "12px",
      }}
    >
      <CardActionArea
        disableRipple={true}
        sx={{
          cursor: "default",
          "&:hover": {
            "& .MuiCardActionArea-focusHighlight": {
              opacity: 0,
            },
          },
        }}
      >
        <Box>
          <CardMedia component="img" height="auto" image={image} alt="image" />
          <CardContent
            sx={{
              background: theme.palette.blue.light,
            }}
          >
            <Typography variant="body1">{name}</Typography>
            <Typography variant="caption">{role}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

function About() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: "md",
        mx: { xs: "0px", md: "auto" },
      }}
    >
      <Box mx="16px">
        <Typography variant="h1" mt="32px" mb="24px">
          Our Team
        </Typography>
        <Grid container spacing="16px">
          {profiles.map(([image, name, role]) => {
            console.log(name);
            return (
              <Grid item xs={6} sm={4}>
                <ProfileCard image={image} name={name} role={role} />
              </Grid>
            );
          })}
        </Grid>
        <Divider
          sx={{
            my: "64px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h1" mb="16px">
            Background
          </Typography>
          <Typography variant="body1">
            Behind the OKB Hope Health is the OKB Hope Foundation, a non-profit
            organization that provides transformative healthcare and innovative
            public health programs to rural and underserved Ghanaians.
            <br />
            <br />
            Since the organization's inception, we have served over 3000
            individuals by providing them with whole health assessments and
            lifesaving medications. Our vision is to ensure that equitable and
            quality healthcare is accessible to all Ghanaians.
            <br />
            <br />
            Visit the organization’s website to learn more about our work and
            the team
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
