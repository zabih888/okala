import { createTheme } from "@mui/material/styles";import fontFarsi from "../assets/fonts/Shabnam.woff2";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#c50000",
    },
  },
  typography: {
    fontFamily: fontFarsi,
  },
});

export default theme;
