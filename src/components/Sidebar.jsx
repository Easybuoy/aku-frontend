import React from "react";
import styled from "styled-components";
import Logo from "./ui/Logo";

const StyledSidebar = styled.div`
  width: 20%;
  /* height: 100vh; */
  background-color: red;
  display: flex;
  flex-wrap: wrap;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <Logo />
    </StyledSidebar>
  );
};

export default Sidebar;
