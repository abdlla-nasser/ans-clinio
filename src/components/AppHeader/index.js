import React from "react";
import { useSelector } from "react-redux";
import Menu from "./menu";
import Text from "../Text";
import Flex from "../Flex";
import { colors } from "../../utils/theme";
import LanguageDropdown from "../LanguageDropdown";
import {
  MainHeader,
  LogoSettingsContainer,
  OptionsContainer,
  Logo,
  SettingsContainer,
  HeaderSvg,
  StyledBadge,
} from "./styled";

import bellSvg from "../../assets/svgs/bell.svg";
import logoutSvg from "../../assets/svgs/logout.svg";
import searchSvg from "../../assets/svgs/search.svg";
import clinioLogo from "../../assets/svgs/mainLogo.svg";
import messagesSvg from "../../assets/svgs/messages.svg";
import settingsSvg from "../../assets/svgs/settings.svg";

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

const AppHeader = () => {
  const language = useSelector(
    ({ appBaseReducer }) => appBaseReducer.language.language_code
  );
  const languages = useSelector(
    ({ appBaseReducer }) => appBaseReducer.languages
  );

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
          <HeaderSvg src={searchSvg} alt="search" marginEnd="15px" />
          <LanguageDropdown
            userSelectedLanguage={language}
            allOtherUserLanguages={languages}
          />
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
