import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import AppRouter from "./routes";
import store from "./utils/store";
import BasePage from "./Pages/BasePage";

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <BasePage>
        <AppRouter />
      </BasePage>
    </BrowserRouter>
  </Provider>
);

export default App;
