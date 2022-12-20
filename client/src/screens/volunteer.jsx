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

function Volunteer() {
  const theme = useTheme();

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
            Volunteer with us
          </Typography>
          <Button sx={{ ...theme.purpleButton }}>Sign Up</Button>
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
              marginTop: "32px",
              marginBottom: "24px",
            }}
          >
            How you can help
          </Typography>
          <p>hehe</p>
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
          <Typography
            variant="h5"
            sx={{
              marginBottom: "24px",
            }}
          >
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
          <Typography
            variant="h5"
            sx={{
              marginBottom: "24px",
            }}
          >
            Locations
          </Typography>
          <Typography variant="body1">PLACEHOLDER TEXT</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Volunteer;
