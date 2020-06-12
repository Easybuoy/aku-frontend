import React from "react";
import styled from "styled-components";
import Logo from "./ui/Logo";
import Profile from "./ui/Profile";
import SideNav from "./ui/SideNav";

const StyledSidebar = styled.div`
  width: 20%;
  /* height: 100vh; */
  background-color: #3553f1;
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;

  /* .sidebar {
    display: flex;
    flex-wrap: wrap;
    height: auto;
  } */
`;

const Sidebar = () => {
  return (
    <StyledSidebar>
      {/* <div className="sidebar"> */}
      <Logo />
      <Profile />
      <SideNav />
      {/* </div> */}
    </StyledSidebar>
  );
};

export default Sidebar;
