import React from "react";
import StyledImg from "./styled";

export default ({
  src,
  type,
  alt = "doctor",
  width,
  height,
  borderRaduis,
  style,
  noDefault,
  ...props
}) => {
  let defaultSrc = require("../../assets/images/nodocm.jpeg");
  if (type) {
    defaultSrc = require(`../../assets/images/${type}`);
  }

  const onError = ({ target }) => {
    target.onerror = null;
    target.src = noDefault ? "" : defaultSrc;
  };

  return (
    <StyledImg
      src={src}
      alt={alt}
      onError={onError}
      width={width}
      height={height}
      borderRaduis={borderRaduis}
      style={style}
      {...props}
    />
  );
};
