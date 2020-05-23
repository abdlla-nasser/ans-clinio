import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import AppRouter from "./routes";
import BasePage from "./Pages/BasePage";
import { store, persistor } from "./utils/store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <PersistGate persistor={persistor}>
        <BasePage>
          <AppRouter />
        </BasePage>
      </PersistGate>
    </BrowserRouter>
  </Provider>
);

export default App;
