import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledRecentEvents = styled.div`
  height: 500px;
  width: 100%;
`;

const RecentEvents = () => {
  return (
    <Card>
      <StyledRecentEvents></StyledRecentEvents>
    </Card>
  );
};

export default RecentEvents;
