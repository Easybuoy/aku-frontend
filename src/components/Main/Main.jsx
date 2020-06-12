import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Navigation from "./ui/Navigation";
import Breadcrumb from "./ui/Breadcrumb";
import Radar from "./charts/Radar";
const StyledMain = styled.div`
  background-color: white;
  width: 79.5%;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;
`;

const Main = () => {
  return (
    <StyledMain>
      <Navigation />
      <Container margin="1rem">
        <Breadcrumb />
        <Radar />
      </Container>
    </StyledMain>
  );
};

export default Main;
