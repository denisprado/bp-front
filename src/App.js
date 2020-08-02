import React from "react";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Global from "./styles/global";
import Header from "./components/Header";

import AppProvider from "./hooks/index";

const App = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header></Header>
        <Routes />
        <Global />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
