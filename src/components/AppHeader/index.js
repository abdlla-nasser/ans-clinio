import React from "react";
import Menu from "./menu";
import Text from "../Text";
import Flex from "../Flex";
import { colors } from "../../utils/theme";
import clinioLogo from "../../assets/svgs/mainLogo.svg";
import bellSvg from "../../assets/svgs/bell.svg";
import messagesSvg from "../../assets/svgs/messages.svg";
import settingsSvg from "../../assets/svgs/settings.svg";
import searchSvg from "../../assets/svgs/search.svg";
import logoutSvg from "../../assets/svgs/logout.svg";
import {
  MainHeader,
  LogoSettingsContainer,
  OptionsContainer,
  Logo,
  SettingsContainer,
  HeaderSvg,
  StyledBadge,
} from "./styled";

const { memo } = React;

const WelcomeText = ({ user = "Mr. Nagy", lastLogin = "10 mins" }) => (
  <Flex column>
    <Text
      children={`Welcome back ${user}`}
      color={colors.appPrimiry}
      size={18}
      lineHeight="30px"
    />
    <Text
      children={`Last Login ${lastLogin} ago`}
      color={colors.yellow}
      size={12.5}
    />
  </Flex>
);

const AppHeader = ({ pushToPath, onSwitchLang, countryFlag, isRtl }) => {
  return (
    <MainHeader>
      <LogoSettingsContainer>
        <Logo src={clinioLogo} alt="Clinio Logo" />

        <SettingsContainer>
          <StyledBadge showZero count={0}>
            <HeaderSvg src={bellSvg} alt="notifications" marginEnd="-10px" />
          </StyledBadge>
          <HeaderSvg src={messagesSvg} alt="messages" width="30px" />
          <HeaderSvg
            src={settingsSvg}
            alt="settings"
            height="22px"
            marginTop="-7px"
          />
          <HeaderSvg src={searchSvg} alt="search" />
          <HeaderSvg src={logoutSvg} alt="logout" marginEnd="0px" />
        </SettingsContainer>
      </LogoSettingsContainer>

      <OptionsContainer>
        <WelcomeText />
        <Menu />
      </OptionsContainer>
    </MainHeader>
  );
};

export default memo(AppHeader);
