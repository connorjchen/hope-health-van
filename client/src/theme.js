import { createTheme } from "@mui/material/styles";

const darkBlue = "#2B75D6";
const mediumBlue = "#C6E0FB";
const lightBlue = "#F5F9FF";
const greyishBlue = "#D9E2ED";

const white = "#FFFFFF";
const lightGrey = "#CAC4D0";
const darkGrey = "#1C1B1F";
const black = "#000000";
const errorAlert = "#B3261E";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto"],
    body1: {
      fontSize: "16px",
    },
    h1: {
      fontWeight: 400,
      fontSize: "24px",
    },
    h2: {
      fontWeight: 400,
      fontSize: "22px",
      margin: "0px",
    },
    h3: {
      fontWeight: 400,
      fontSize: "20px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "16px",
    },
    h4: {
      fontWeight: 400,
      fontSize: "18px",
      marginTop: "20px",
      marginBottom: "20px",
    },
    h5: {
      fontWeight: 700,
      fontSize: "16px",
      marginTop: "10px",
      marginBottom: "10px",
    },
    caption: {
      display: "block",
      fontSize: "14px",
      color: "#49454F",
      lineHeight: "20px",
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
    blue: {
      dark: darkBlue,
      medium: mediumBlue,
      greyish: greyishBlue,
      light: lightBlue,
    },
  },
  components: {
    MuiTypography: {
      display: "block",
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontSize: "14px",
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
          background: greyishBlue,
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: darkBlue,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: greyishBlue,
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
            color: darkBlue,
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
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: lightGrey,
          backgroundColor: lightGrey,
        },
      },
    },
  },
  blueButton: {
    background: darkBlue,
    display: "block",
    borderRadius: "100px",
    padding: "8px 16px",
    "&:hover": {
      background: darkBlue,
    },
  },
  blueInput: {
    background: lightBlue,
    "& .MuiFilledInput-root": {
      backgroundColor: "inherit",
      "&:hover": {
        backgroundColor: "inherit",
      },
    },
  },
});

export default theme;
