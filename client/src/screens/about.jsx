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
} from "@mui/material";
import theme from "../theme";

const profiles = [
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
];

function ProfileCard({ image, name, role }) {
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
              background: theme.palette.purple.light,
            }}
          >
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body1">{role}</Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
}

function About() {
  return (
    <Box>
      <Box sx={{ background: "black", height: "188px" }}>placeholder image</Box>
      <Box>
        <Box mx="16px">
          <Typography
            variant="h5"
            sx={{
              marginTop: "32px",
              marginBottom: "24px",
            }}
          >
            Our Team
          </Typography>
          <Grid container spacing="16px">
            {profiles.map(([image, name, role]) => {
              console.log(name);
              return (
                <Grid item xs={6} sm={4} md={3}>
                  <ProfileCard image={image} name={name} role={role} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Divider
          sx={{
            my: "24px",
          }}
        />
        <Box mx="16px">
          <Typography
            variant="h5"
            sx={{
              marginBottom: "24px",
            }}
          >
            Our Mission
          </Typography>
          <Typography variant="body1">PLACEHOLDER TEXT</Typography>
        </Box>
        <Divider
          sx={{
            my: "24px",
          }}
        />
        <Box mx="16px">
          <Typography
            variant="h5"
            sx={{
              marginBottom: "24px",
            }}
          >
            Our Vision
          </Typography>
          <Typography variant="body1">PLACEHOLDER TEXT</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
