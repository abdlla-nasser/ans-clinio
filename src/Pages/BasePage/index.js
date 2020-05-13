import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { getHeightAfterOffset } from "../../utils/getPageContentHeight";
import { isFullWidthRouteScreen } from "./utils";
import { StyledLayout, StyledContent } from "./styled";
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
  // const fullwidth = isFullWidthRouteScreen(pathname);
  const height = getHeightAfterOffset(isLogin ? 110 : 180);

  return (
    <>
      <StyledLayout dir="ltr">
        {!isLogin && <AppHeader />}

        <StyledContent height={height}>{children}</StyledContent>
      </StyledLayout>
      {!isLogin && <AppFooter />}
    </>
  );
};

export default withRouter(BasePage);
