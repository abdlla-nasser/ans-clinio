import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import LoadingComponent from "./components/LoadableLoading";

const loadableProps = {
  delay: 3,
  loading: LoadingComponent,
};

const LoginPage = Loadable({
  loader: () => import("./Pages/Login"),
  ...loadableProps,
});

const ConsultationSetup = Loadable({
  loader: () => import("./Pages/ConsultationSetup"),
  ...loadableProps,
});

export default () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/consultationSetup" exact component={ConsultationSetup} />
  </Switch>
);
