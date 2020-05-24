import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./utils/selectors";
import { Layout, Content } from "./styled";
import loadable from "../../components/Loadable";

const { useEffect } = React;

const AppHeader = loadable(() => import("../../components/AppHeader"));
const AppFooter = loadable(() => import("../../components/AppFooter"));

const BasePage = ({
  children,
  language,
  languages,
  getAppLanguages,
  setDefaultLangToBrowserLang,
  history: {
    location: { pathname },
  },
}) => {
  useEffect(() => {
    if (languages.length === 0) {
      getAppLanguages();
    }

    if (!language) {
      setDefaultLangToBrowserLang();
    }
    //eslint-disable-next-line
  }, []);

  const isLogin = pathname === "/";
  const dir = language && language.r2l ? "rtl" : "ltr";

  return (
    <>
      <Layout dir={dir}>
        {!isLogin && <AppHeader selectedLanguage={language} />}
        <Content>{children}</Content>
        <AppFooter isLogin={isLogin} />
      </Layout>
    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BasePage)
);
