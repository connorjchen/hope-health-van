import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProgressHeader = ({ title, onBack, progress }) => {
  const theme = useTheme();

  return (
    <Box>
      <Box mb="10px">
        <Toolbar justify="center" sx={{ minHeight: 0 }}>
          <IconButton color="inherit" edge="start" onClick={onBack}>
            <ArrowBackIcon padding="0px" />
          </IconButton>
          <Typography variant="h2" align="center" noWrap sx={{ flex: 1 }}>
            {title}
          </Typography>
          <IconButton edge="end" sx={{ visibility: "hidden" }}>
            <ArrowBackIcon padding="0px" />
          </IconButton>
        </Toolbar>
      </Box>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressHeader;
