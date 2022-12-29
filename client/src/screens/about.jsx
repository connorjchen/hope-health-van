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

const profiles = [
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
  ["https://picsum.photos/200", "Name name", "Title / role"],
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
              background: theme.palette.purple.light,
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
    <Box>
      <Box sx={{ background: "black", height: "188px" }}>placeholder image</Box>
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
        </Box>
        <Divider
          sx={{
            my: "64px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h1" mb="16px">
            Our Mission
          </Typography>
          <Typography variant="body1">
            Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet
            bibendum metus et vehicula. ue. Sed laoreet bibendum metus et
            vehicula. ue. Sed laoreet bibendum metus et vehicula.
          </Typography>
        </Box>
        <Divider
          sx={{
            my: "64px",
          }}
        />
        <Box mx="16px">
          <Typography variant="h1" mb="16px">
            Our Vision
          </Typography>
          <Typography variant="body1">
            Nunc at leo pellentesque, dictum nibh a, aliquam neque. Sed laoreet
            bibendum metus et vehicula. ue. Sed laoreet bibendum metus et
            vehicula. ue. Sed laoreet bibendum metus et vehicula.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
