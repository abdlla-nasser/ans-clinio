import React from "react";
import Flex from "../Flex";
import Text from "../Text";
import footerImg from "../../assets/images/footerLogo.png";
import { FooterLogo, StyledFooter } from "./styled";

export default ({ applybluestyle }) => (
  <StyledFooter applybluestyle={applybluestyle ? "true" : ""}>
    <Flex justify="space-between">
      <FooterLogo src={footerImg} />
      <Text
        size={12.5}
        letterSpacing={0.5}
        fontweight="unset"
        children="All Copyrights Reserved Exsys Solutions inc."
      />
    </Flex>
  </StyledFooter>
);
