import styled from "styled-components";
import Flex from "../Flex";
import Layout from "antd/lib/layout";
import Badge from "antd/lib/badge";

const { Header } = Layout;

export const MainHeader = styled(Header)`
  display: flex;
  flex-direction: column;
  height: min-content;
  /* border-bottom: 1px solid #edeef9; */
  background-color: #fff;
  padding: 5px 50px 0px 50px;
`;

export const LogoSettingsContainer = styled(Flex)`
  width: 100%;
  padding: inherit;
  /* margin: auto; */
  border-bottom: 2px solid #edeef9;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  width: 150px;
  height: 55px;
  object-fit: contain;
`;

export const Settings = styled.div`
  display: inline-block;
`;

export const HeaderSvg = styled.img`
  cursor: pointer;
  width: ${({ width }) => width || "25px"};
  height: ${({ height }) => height || "25px"};
  margin-inline-end: ${({ marginEnd }) => marginEnd || "30px"};
  margin-top: ${({ marginTop }) => marginTop};
`;

export const StyledBadge = styled(Badge)`
  margin-top: 10px;
  margin-inline-end: 50px;
  > .ant-badge-count {
    background-color: #ebb74e;
  }
`;

export const OptionsContainer = styled(LogoSettingsContainer)`
  justify-content: flex-end;
`;

export const StyledOption = styled.nav`
  display: -webkit-inline-box;
  margin-inline-end: ${({ marginEnd }) => marginEnd || "70px"};
`;
