import { createTheme, alpha } from "@mui/material/styles";

const darkPurple = "#6750A4";
const mediumPurple = "#E8DEF8";
const lightPurple = "#FFFBFE";
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
      light: lightPurple,
    },
  },
});

export default theme;
