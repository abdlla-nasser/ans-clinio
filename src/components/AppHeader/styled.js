import styled from "styled-components";
import Flex from "../Flex";
import Menu from "antd/lib/menu";
import Layout from "antd/lib/layout";
import Badge from "antd/lib/badge";

const { Header } = Layout;

export const MainHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  height: min-content;
  background-color: inherit;
  padding: 5px 0;
`;

export const LogoSettingsContainer = styled(Flex)`
  justify-content: space-between;
  margin-block-start: 5px;
  margin-block-end: 20px;
`;

export const Logo = styled.img`
  height: 55px;
  object-fit: contain;
`;

export const SettingsContainer = styled.div`
  display: inline-block;
`;

export const HeaderSvg = styled.img`
  cursor: pointer;
  width: ${({ width }) => width || "25px"};
  height: ${({ height }) => height || "25px"};
  margin-inline-end: ${({ marginEnd }) => marginEnd || "20px"};
  margin-top: ${({ marginTop }) => marginTop};
`;

export const FlagImg = styled(HeaderSvg)`
  width: 30px;
  height: 20px;
  margin-block-start: -5px;
`;

export const FlagListImg = styled(FlagImg)`
  margin-inline-end: 0;
`;

export const StyledBadge = styled(Badge)`
  margin-top: 10px;
  margin-inline-end: 40px;
  > .ant-badge-count {
    background-color: #ebb74e;
  }
`;

export const OptionsContainer = styled(Flex)`
  padding-block-end: 5px;
  justify-content: space-between;
  border-bottom: 1px solid #87cefa;
`;

export const StyledMenu = styled(Menu)`
  background-color: inherit;
  font-size: 15.5px;
  line-height: 46px !important;
`;
