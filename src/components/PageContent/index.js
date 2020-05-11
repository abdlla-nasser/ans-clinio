import React from "react";
import { PageContentWrapper } from "./styled";
import { getHeightAfterOffset } from "../../utils/getPageContentHeight";

const { useMemo, memo } = React;

const PageWrapper = ({
  children,
  calcHeaderOffset,
  applyBorders,
  offset,
  margin,
  useHeight,
  renderFullHeight,
  backgroundColor,
  padding,
}) => {
  const mainHeight = useMemo(
    () => getHeightAfterOffset(calcHeaderOffset ? 60 : offset ? offset : 143),
    [calcHeaderOffset, offset]
  );

  return (
    <PageContentWrapper
      applyBorders={applyBorders}
      height={mainHeight}
      margin={margin}
      fullheight={renderFullHeight && mainHeight}
      bgcolor={backgroundColor}
      padding={padding}
    >
      {useHeight ? children({ mainHeight }) : children}
    </PageContentWrapper>
  );
};

export default memo(PageWrapper);
