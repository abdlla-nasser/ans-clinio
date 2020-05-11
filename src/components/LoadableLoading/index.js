import React from "react";

import PageContainer from "../PageContent";
import Spinner from "../SpinnerLoader";
import Flex from "../Flex";

const LoadingComponent = ({ isLoading, error, children }) => {
  let component;

  if (isLoading) {
    component = Spinner({ loading: isLoading, size: "large" });
  } else if (error) {
    component = <div children={JSON.stringify(error)} />;
  } else {
    component = children;
  }

  const renderChildren = ({ mainHeight }) => (
    <Flex justify="center" height={`${mainHeight}px`} align="center">
      {component}
    </Flex>
  );

  return (
    <PageContainer useHeight={isLoading || !!error}>
      {!(isLoading || error) && children ? children : renderChildren}
    </PageContainer>
  );
};

export default LoadingComponent;
