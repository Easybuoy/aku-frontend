import React from "react";
import styled from "styled-components";

import Card from "../../common/Card";

const StyledInvoices = styled.div`
  height: 400px;
  width: 100%;
  margin: 1rem 0;
`;

const Invoices = () => {
  return (
    <StyledInvoices>
      <Card style={{ height: "100%" }}>
        <h2>Invoices</h2>
      </Card>
    </StyledInvoices>
  );
};

export default Invoices;
