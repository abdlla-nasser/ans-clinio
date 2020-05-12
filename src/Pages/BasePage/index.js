import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getHeightAfterOffset } from "../../utils/getPageContentHeight";
import { isFullWidthRouteScreen } from "./utils";
import { StyledContainer, ContentView } from "./styled";
import loadable from "../../components/Loadable";

const AppHeader = loadable(() => import("../../components/AppHeader"));
const AppFooter = loadable(() => import("../../components/AppFooter"));

const BasePage = ({
  children,
  history: {
    location: { pathname },
    push,
    goBack,
  },
}) => {
  const isLogin = pathname === "/";
  const fullwidth = isFullWidthRouteScreen(pathname);
  const height = getHeightAfterOffset(isLogin ? 110 : 60);

  return (
    <StyledContainer dir="ltr">
      {!isLogin && <AppHeader />}

      <ContentView fullwidth={fullwidth} height={height}>
        {children}
      </ContentView>
      {!fullwidth && !isLogin && <AppFooter />}
    </StyledContainer>
  );
};

export default withRouter(BasePage);
