import { createTheme, alpha } from "@mui/material/styles";

const darkPurple = "#6750A4";
const mediumPurple = "#E8DEF8";
const inputPurple = "#E7E0EC";
const lightPurple = "#FFFBFE";
const greyishPurple = "rgba(231, 224, 236, 0.49);";
const white = "#FFFFFF";
const lightGrey = "#CAC4D0";
const darkGrey = "#1C1B1F";
const black = "#000000";
const errorAlert = "#B3261E";

const theme = createTheme({
  typography: {
    fontSize: 18.75, // TODO: figure out mapping from rem to px for this to be exactly 16px
    fontFamily: ["Roboto"],
    h2: {
      fontWeight: 400,
      fontSize: "22px",
      margin: "0px",
    },
    h3: {
      fontWeight: 400,
      fontSize: "20px",
      margin: "20px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
    },
    h4: {
      fontWeight: 400,
      fontSize: "16px",
      margin: "20px",
    },
    h5: {
      fontWeight: 500,
      fontSize: "16px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    caption: {
      fontSize: "14px",
    },
  },
  palette: {
    primary: {
      main: white,
      black: black,
      outline: lightGrey,
      error: errorAlert,
    },
    secondary: {
      main: darkGrey,
    },
    purple: {
      dark: darkPurple,
      medium: mediumPurple,
      greyish: greyishPurple,
      light: lightPurple,
      input: inputPurple,
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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "&.Mui-checked": {
            color: darkPurple,
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          paddingTop: "10px",
          paddingBottom: "10px",
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
