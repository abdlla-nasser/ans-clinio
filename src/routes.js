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

const RegionsSetup = Loadable({
  loader: () => import("./Pages/RegionsSetup"),
  ...loadableProps,
});

const AreasSetup = Loadable({
  loader: () => import("./Pages/AreasSetup"),
  ...loadableProps,
});

const SystemServices = Loadable({
  loader: () => import("./Pages/SystemServices"),
  ...loadableProps,
});

const MedicationsSetup = Loadable({
  loader: () => import("./Pages/MedicationsSetup"),
  ...loadableProps,
});

const LanguagesSetup = Loadable({
  loader: () => import("./Pages/LanguagesSetup"),
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
    <Route path="/regionsSetup" exact component={RegionsSetup} />
    <Route path="/areasSetup" exact component={AreasSetup} />
    <Route path="/systemServices" exact component={SystemServices} />
    <Route path="/medicationsSetup" exact component={MedicationsSetup} />
    <Route path="/languagesSetup" exact component={LanguagesSetup} />
  </Switch>
);
