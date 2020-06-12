import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  width: 100%;

  .logo {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #778ef5;
    border-radius: 50%;
    padding: 0;
    margin: 0;
    font-weight: bolder;
    height: 35px;
    width: 35px;
    margin-right: 1rem;
    p {
      margin: 0;
      padding: 0;
      color: white;
    }
  }

  h3 {
    font-weight: bolder;
    color: white;
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
