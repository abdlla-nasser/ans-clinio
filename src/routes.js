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

const EmptyPage = Loadable({
  loader: () => import("./Pages/EmptyPage"),
  ...loadableProps,
});

const ClinicalSpecialitiesSetup = Loadable({
  loader: () => import("./Pages/ClinicalSpecialitiesSetup"),
  ...loadableProps,
});

export default () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/empty" exact component={EmptyPage} />
    <Route
      path="/clinicalSpecialitiesSetup"
      exact
      component={ClinicalSpecialitiesSetup}
    />
  </Switch>
);
