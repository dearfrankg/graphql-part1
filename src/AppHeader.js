import React from "react";
import logo from "./logo.svg";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`;

const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const AppTitle = styled.h1`
  font-size: 1.3em;
`;

const App = () => (
  <AppHeader>
    <AppLogo src={logo} alt="logo" />
    <AppTitle>Welcome to React</AppTitle>
  </AppHeader>
);

export default App;
