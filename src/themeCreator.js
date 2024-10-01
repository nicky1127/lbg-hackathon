import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    // primary: {
    //   main: '#1976d2',
    // },
    // secondary: {
    //   main: '#dc004e',
    // },
    text: {
      primary: "rgb(37,42,62)",
      secondary: "rgb(37,42,62)",
      disabled: "rgb(37,42,62)",
      hint: "#999999",
      // Add your custom text colors here
      customColor1: "#ff5722",
      customColor2: "#4caf50",
    },
  },
});

export default theme;
