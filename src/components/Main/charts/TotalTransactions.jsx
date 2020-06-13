import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledTotalTransactions = styled.div`
  height: 200px;
  width: 100%;
`;

const TotalTransactions = () => {
  return (
    <Card>
      <StyledTotalTransactions></StyledTotalTransactions>
    </Card>
  );
};

export default TotalTransactions;
