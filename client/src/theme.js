import { createTheme, alpha } from "@mui/material/styles";

const darkPurple = "#6750A4";
const mediumPurple = "#E8DEF8";
const lightPurple = "#FFFBFE";
const greyishPurple = "rgba(231, 224, 236, 0.49);";
const lightGrey = "#FFFFFF";
const black = "#000000";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"],
    h1: {
      fontWeight: 400,
      fontSize: "20px",
      margin: "20px",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "16px",
    },
  },
  palette: {
    primary: {
      main: lightGrey,
      black: black,
    },
    purple: {
      dark: darkPurple,
      medium: mediumPurple,
      greyish: greyishPurple,
      light: lightPurple,
    },
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          background: greyishPurple,
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: darkPurple,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: greyishPurple,
          borderRadius: "5px",
          label: {
            fontSize: "16px",
          },
          input: {
            fontSize: "16px",
          },
        },
      },
    },
  },
});

export default theme;
