import styled from "styled-components";
import Flex from "../Flex";
import Icon from "antd/lib/icon";

export const ButtonContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 1px 8px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-top-width: 1.02px;
  border-radius: 4px;
  height: 31px;
  width: 90%;
  margin: auto;
`;

export const TextValue = styled.span`
  opacity: 0.6;
  flex: 0 auto;
  font-family: Roboto;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
`;

export const StyledIcon = styled(Icon)`
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
  opacity: 0.6;
`;

export const ConfirmButton = styled.span`
  font-size: 16px;
  color: #006fbb;
  cursor: pointer;
  display: block;
  text-align: center;
  margin-top: 10px;
`;

export const ErrorView = styled.span`
  height: 13px;
  display: block;
  color: red;
  font-size: 13px;
  font-family: Roboto;
  margin: 3px 0px;
`;
