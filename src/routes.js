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

const InsuranceCompaniesSetup = Loadable({
  loader: () => import("./Pages/InsuranceCompaniesSetup"),
  ...loadableProps,
});

const AllergiesSetup = Loadable({
  loader: () => import("./Pages/AllergiesSetup"),
  ...loadableProps,
});

const ServiceGroups = Loadable({
  loader: () => import("./Pages/ServiceGroups"),
  ...loadableProps,
});

const CountriesSetup = Loadable({
  loader: () => import("./Pages/CountriesSetup"),
  ...loadableProps,
});

export default () => (
  <Switch>
    <Route path="/" exact component={LoginPage} />
    <Route path="/consultationSetup" exact component={ConsultationSetup} />
    <Route
      path="/insuranceCompaniesSetup"
      exact
      component={InsuranceCompaniesSetup}
    />
    <Route path="/allergiesSetup" exact component={AllergiesSetup} />
    <Route path="/serviceGroups" exact component={ServiceGroups} />
    <Route path="/countriesSetup" exact component={CountriesSetup} />
  </Switch>
);
