import React from "react";
import styled from "styled-components";

import Navigation from "./ui/Navigation";
import Breadcrumb from "./ui/Breadcrumb";

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
      <Breadcrumb />
    </StyledMain>
  );
};

export default Main;
