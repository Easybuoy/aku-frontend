import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 1rem auto;

  .logo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    font-weight: bolder;
    height: 35px;
    width: 35px;

    p {
      margin: 0;
      padding: 0;
    }
  }

  h3 {
    font-weight: bold;
  }
`;

const Logo = () => {
  return (
    <StyledLogo>
      <div className="logo">
        <p>S</p>
      </div>
      <h3>SimpleDashboard</h3>
    </StyledLogo>
  );
};

export default Logo;
