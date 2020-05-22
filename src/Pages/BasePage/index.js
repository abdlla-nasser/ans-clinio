import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./utils/selectors";
import { getHeightAfterOffset } from "../../utils/getPageContentHeight";
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
  history: {
    location: { pathname },
  },
}) => {
  useEffect(() => {
    if (languages.length === 0) {
      getAppLanguages();
    }
  }, []);

  const isLogin = pathname === "/";
  const height = getHeightAfterOffset(isLogin ? 110 : 154);

  return (
    <>
      <Layout dir={language.dir}>
        {!isLogin && <AppHeader selectedLanguage={language} />}
        <Content height={height}>{children}</Content>
        <AppFooter isLogin={isLogin} />
      </Layout>
    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BasePage)
);
