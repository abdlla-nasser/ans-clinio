import React from "react";
import Flex from "../Flex";
import Spinner from "antd/lib/spin";
import styled from "styled-components";
import { baseCss, renderBg } from "./utils";

const { Fragment, Suspense, lazy } = React;
const Link = lazy(() => import("../Link"));
const Button = lazy(() => import("./index"));

export default function ({
  title,
  borderredius,
  image,
  imgAlt,
  type,
  onClick,
  color,
  bgColor,
  buttonPadding,
  height,
  loading,
  disabled,
  width,
  style,
  linkTo,
  svgIcon,
  htmlType,
  fontSize,
  imgStyle,
}) {
  const imageValue = image ? (
    <ImgWrapper borderredius={borderredius}>
      <ImageComponent src={image} alt={imgAlt} style={imgStyle} />
    </ImgWrapper>
  ) : svgIcon ? (
    svgIcon
  ) : null;

  function onPress() {
    if (!disabled || !loading) {
      onClick && onClick();
    }
  }

  return (
    <ButtonWrapper
      borderredius={borderredius}
      height={height}
      onClick={onPress}
      type={type}
      disabled={disabled}
      width={width}
      style={style}
    >
      {loading ? (
        <Spinner size="small" spin="true" />
      ) : (
        <Fragment>
          {imageValue}
          <Suspense fallback={<Fragment />}>
            {linkTo ? (
              <Link
                to={linkTo}
                color={color}
                children={title}
                height="39px"
                nohover="true"
                lineheight={42}
                width="80px"
                center="true"
                fontSize={fontSize}
              />
            ) : (
              <Button
                disabled={disabled}
                children={title}
                bgColor={bgColor}
                buttonPadding={buttonPadding}
                center={!imageValue}
                color={color}
                type={htmlType}
                fontsize={fontSize}
              />
            )}
          </Suspense>
        </Fragment>
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled(Flex)`
  width: ${({ width }) => `${width || 114}px`};
  height: ${({ height }) => `${height || 36}px`};
  border-radius: ${({ borderredius }) => `${borderredius || 20}px`};
  ${({ type }) => !!type && baseCss + `background-color: ${renderBg(type)}`};
  justify-content: center;
  align-items: center;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #ede7cd;
    cursor: not-allowed;
    color: #fff;
  `}
`;

const ImgWrapper = styled.section`
  width: 25px;
  height: 36px;
  object-fit: contain;
  border-radius: ${({ borderredius }) => `${borderredius || 18.7}px`};
`;

const ImageComponent = styled.img`
  width: 21px;
  height: 21px;
  margin-top: 7px;
  object-fit: contain;
  background-color: transparent;
`;
