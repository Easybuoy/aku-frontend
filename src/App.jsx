import React from "react";
import Container from "./components/Container";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Main />
    </Container>
  );
};

export default App;
