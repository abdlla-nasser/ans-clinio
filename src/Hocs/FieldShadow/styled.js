import styled from "styled-components";
import Flex from "../../components/Flex";

export const InputWrapper = styled(Flex)`
  width: 411px;
  height: 37px;
  padding: 0px 15px;
  border-radius: ${({ borderredius }) => `${borderredius || 18}px`};
  margin: ${({ resetMargins }) => (resetMargins ? "0px" : "13px 0px")};
  box-shadow: 4px 6.9px 18.7px 2.3px rgba(17, 81, 125, 0.09);
  background-color: #fff;
`;

export const ImageComponent = styled.img`
  width: 30px;
  height: 30px;
  margin-inline-end: 12px;
  margin-top: 7px;
  object-fit: contain;
`;

export const ErrorView = styled.span`
  height: 15px;
  display: inline-block;
  color: red;
  font-size: 14.5px;
  font-family: Roboto;
  width: 415px;
`;
