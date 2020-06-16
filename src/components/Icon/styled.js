import styled from "styled-components";
import { colors } from "../../utils/theme";

export const IconContainer = styled.section`
  cursor: pointer;
  border-radius: 5px;
  margin-inline-end: ${({ marginend }) => marginend};
  margin-inline-start: ${({ marginstart }) => `${marginstart || "5px"}`};
  margin-top: ${({ margintop }) => `${margintop || 4}px`};
  margin-bottom: ${({ marginbottom }) => `${marginbottom || 0}px`};
  width: ${({ width }) => width || "35px"};
  height: ${({ height }) => height || "33px"};
  padding: ${({ padding }) => padding || "7px"};
  text-align: center;
  ${({ setDisabledBg }) => `
    background-color: ${setDisabledBg ? "#ebebeb" : colors.appPrimiry};
    border-radius: ${setDisabledBg ? "2px" : "5px"};
  `};
`;
