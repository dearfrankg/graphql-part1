import React from "react";
import styled from "styled-components";
import AppHeader from "./AppHeader";
import TopRepos from "./TopRepos";

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => (
  <AppWrapper>
    <AppHeader />
    <TopRepos />
  </AppWrapper>
);

export default App;
