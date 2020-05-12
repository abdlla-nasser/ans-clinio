import React from "react";
import Menu from "./menu";
import Text from "../Text";
import Icon from "../Icon";
import clinioLogo from "../../assets/images/clinioLogo.png";
import bellSvg from "../../assets/svgs/bell.svg";
import messagesSvg from "../../assets/svgs/messages.svg";
import settingsSvg from "../../assets/svgs/settings.svg";
import searchSvg from "../../assets/svgs/search.svg";
import logoutSvg from "../../assets/svgs/logout.svg";
import dropDownSvg from "../../assets/svgs/dropDown.svg";
import {
  MainHeader,
  LogoSettingsContainer,
  OptionsContainer,
  Logo,
  Settings,
  HeaderSvg,
  StyledOption,
  StyledBadge,
} from "./styled";

const { memo } = React;

const Option = ({ children, marginEnd }) => (
  <StyledOption marginEnd={marginEnd}>
    <Text size={16} children={children} />
    <Icon src={dropDownSvg} />
  </StyledOption>
);

const AppHeader = ({ pushToPath, onSwitchLang, countryFlag, isRtl }) => {
  return (
    <MainHeader>
      <LogoSettingsContainer>
        <Logo src={clinioLogo} alt="EXSYS_Logo" />

        <Settings>
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
        </Settings>
      </LogoSettingsContainer>

      <OptionsContainer>
        <Menu />
      </OptionsContainer>
    </MainHeader>
  );
};

export default memo(AppHeader);
