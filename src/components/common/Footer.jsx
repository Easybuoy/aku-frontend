import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0;
  background-color: #dbdbdb;
  width: 100%;

  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
    color: #54575a;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <p>@ {new Date().getFullYear()} Simple Dashboard FE Assessment</p>
        <p>Designed with Love</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
