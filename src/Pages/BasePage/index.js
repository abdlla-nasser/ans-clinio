import React from "react";
import { withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";

import { getFormStorage, setToStorage } from "../../utils/localStorage";
import { mapStateToProps } from "./utils/selectors";
import { getHeightAfterOffset } from "../../utils/getPageContentHeight";
import { StyledLayout, StyledContent } from "./styled";
import loadable from "../../components/Loadable";

const AppHeader = loadable(() => import("../../components/AppHeader"));
const AppFooter = loadable(() => import("../../components/AppFooter"));

const BasePage = ({
  children,
  language,
  history: {
    location: { pathname },
    push,
    goBack,
  },
}) => {
  let selectedLanguage = useSelector(
    ({ appBaseReducer }) => appBaseReducer.language
  );
  const isLogin = pathname === "/";
  const height = getHeightAfterOffset(isLogin ? 110 : 180);

  return (
    <>
      <StyledLayout dir={language === "ar" ? "rtl" : "ltr"}>
        {!isLogin && <AppHeader selectedLanguage={selectedLanguage} />}
        <StyledContent height={height}>{children}</StyledContent>
      </StyledLayout>
      {!isLogin && <AppFooter />}
    </>
  );
};

export default withRouter(connect(mapStateToProps, null)(BasePage));
