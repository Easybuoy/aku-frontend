import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledTotalRevenue = styled.div`
  height: 200px;
  width: 100%;
`;

const TotalRevenue = () => {
  return (
    <Card>
      <StyledTotalRevenue></StyledTotalRevenue>
    </Card>
  );
};

export default TotalRevenue;
