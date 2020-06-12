import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0.1rem;
`;

const Container = (props) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
