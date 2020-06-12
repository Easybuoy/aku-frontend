import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 20%;
  height: 100vh;
  background-color: red;
  display: flex;
  flex-wrap: wrap;
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      <div></div>
    </StyledSidebar>
  );
};

export default Sidebar;
