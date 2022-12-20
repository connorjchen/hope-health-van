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
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
          color: black,
        },
      },
    },
  },
  purpleButton: {
    background: darkPurple,
    display: "block",
    borderRadius: "100px",
    padding: "8px 16px",
    "&:hover": {
      background: darkPurple,
    },
  },
});

export default theme;
