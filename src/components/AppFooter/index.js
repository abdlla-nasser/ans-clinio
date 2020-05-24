import React from "react";
// import { useSelector } from "react-redux";
import Flex from "../Flex";
import Text from "../Text";
import footerImg from "../../assets/images/footerLogo.png";
import { FooterLogo, StyledFooter } from "./styled";

const { memo } = React;

const AppFooter = ({ isLogin }) => {
  // const footerText = useSelector({})

  return (
    <StyledFooter isLogin={isLogin}>
      <Flex justify={isLogin ? "center" : "space-between"}>
        {!isLogin && <FooterLogo src={footerImg} />}
        <Text
          size={13}
          letterSpacing={0.5}
          fontweight={isLogin ? "bold" : "unset"}
          children="All Copyrights Reserved Exsys Solutions inc."
        />
      </Flex>
    </StyledFooter>
  );
};

export default memo(AppFooter);
