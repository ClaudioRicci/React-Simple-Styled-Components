import React from "react";
import { ThemeProvider } from "styled-components";
import Button from "./components/Button";
// import Wrapper from "./components/Wrapper";
import HeaderOne from "./components/HeaderOne";
import HeaderTwo from "./components/HeaderTwo";

const theme = {
  font: "Calibri"
};

export default () => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <HeaderOne font="Arial">H1 Header here</HeaderOne>
      <Button primary>Primary</Button>
      <Button>Regular</Button>
      <HeaderTwo font="fantasy">H2 Header here</HeaderTwo>
    </React.Fragment>
  </ThemeProvider>
);
