import React from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { mapStateToProps } from "./utils/selectors";
import { getHeightAfterOffset } from "../../utils/getPageContentHeight";
import { Layout, Content } from "./styled";
import loadable from "../../components/Loadable";

const AppHeader = loadable(() => import("../../components/AppHeader"));
const AppFooter = loadable(() => import("../../components/AppFooter"));

const BasePage = ({
  children,
  language,
  history: {
    location: { pathname },
  },
}) => {
  let selectedLanguage = useSelector(
    ({ appBaseReducer }) => appBaseReducer.language
  );
  const isLogin = pathname === "/";
  const height = getHeightAfterOffset(isLogin ? 110 : 154);

  return (
    <>
      <Layout dir={language.dir}>
        {!isLogin && <AppHeader selectedLanguage={selectedLanguage} />}
        <Content height={height}>{children}</Content>
        <AppFooter isLogin={isLogin} />
      </Layout>
    </>
  );
};

export default withRouter(connect(mapStateToProps, null)(BasePage));
