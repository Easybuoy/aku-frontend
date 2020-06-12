import React from "react";
import styled from "styled-components";

import Navigation from "./ui/Navigation";
const StyledMain = styled.div`
  background-color: white;
  width: 79%;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;
`;

const Main = () => {
  return (
    <StyledMain>
      <Navigation />
    </StyledMain>
  );
};

export default Main;
