import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledMarketOverview = styled.div`
  height: 400px;
  width: 100%;
`;

const MarketOverview = () => {
  return (
    <StyledMarketOverview>
      <Card style={{ height: "100%" }}>
        <h2>MarketOverview</h2>
      </Card>
    </StyledMarketOverview>
  );
};

export default MarketOverview;
