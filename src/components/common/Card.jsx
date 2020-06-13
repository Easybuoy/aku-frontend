import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 1rem;
`;

const Card = (props) => {
  return <StyledCard {...props}>{props.children}</StyledCard>;
};

export default Card;
