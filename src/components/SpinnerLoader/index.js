import React from "react";
import Spin from "antd/lib/spin";
import LoadingOutlined from "@ant-design/icons/LoadingOutlined";

const { Suspense, Fragment } = React;

const Spinner = ({ loading, userLoaderIcon, size = "small", style }) => {
  const antdIcon = userLoaderIcon && (
    <Suspense fallback={<Fragment />}>
      <LoadingOutlined spin={loading} />
    </Suspense>
  );

  return (
    <Spin
      {...(userLoaderIcon
        ? { indicator: antdIcon }
        : { spinning: loading, size: size })}
      style={style}
    />
  );
};

export default Spinner;
