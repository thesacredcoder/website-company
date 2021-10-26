import React from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";

import { MainNavigation, Home } from "./components";

const theme = createTheme({
  palette: {
    primary: {
      main: "#D9FFFD", //blue
    },
    secondary: {
      main: "#0671B7", //dark blue
    },
    accent: {
      main: "#EE726F", //red
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainNavigation />
      <Home />
    </ThemeProvider>
  );
}

export default App;
