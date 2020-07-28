import styled from "styled-components";
import Flex from "../Flex";
import Menu from "antd/lib/menu";
import Badge from "antd/lib/badge";

export const MainHeader = styled.header`
  height: min-content;
  background-color: transparent;
  padding: 0px 20px;
`;

export const LogoSettingsContainer = styled(Flex)`
  justify-content: space-between;
  margin-block-end: 15px;
`;

export const Logo = styled.img`
  height: 55px;
  position: relative;
  top: 5px;
`;

export const SettingsContainer = styled.div`
  display: inline-block;
  position: relative;
  top: 10px;
`;

export const HeaderSvg = styled.img`
  cursor: pointer;
  width: ${({ width }) => width || "25px"};
  height: ${({ height }) => height || "25px"};
  margin-inline-end: ${({ marginEnd }) => marginEnd || "20px"};
  margin-top: ${({ marginTop }) => marginTop};
`;

export const StyledBadge = styled(Badge)`
  margin-top: 10px;
  margin-inline-end: 40px;
  > .ant-badge-count {
    background-color: #ebb74e;
  }
`;

export const OptionsContainer = styled(Flex)`
  justify-content: space-between;
  border-bottom: 1px solid #87cefa;
`;

export const StyledMenu = styled(Menu)`
  background-color: inherit;
  font-size: 15.5px;
`;
