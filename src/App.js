import React from "react";
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";

import AppRouter from "./routes";
// import store from "./utlities/store";
import BasePage from "./Pages/BasePage";

const App = () => (
  <BrowserRouter basename="/">
    <BasePage>
      <AppRouter />
    </BasePage>
  </BrowserRouter>
);

export default App;
