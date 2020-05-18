import styled from "styled-components";
import Icon from "antd/es/icon";
import { colors } from "../../utils/theme";

export default styled(Icon)`
  line-height: ${({ lineheight }) => `${lineheight || 20}px`};
  margin-inline-end: ${({ marginend }) => `${marginend || 8}px`};
  margin-inline-start: ${({ marginstart }) => marginstart};
  margin-top: ${({ margintop }) => `${margintop || 0}px`};
  margin-bottom: ${({ marginbottom }) => `${marginbottom || 0}px`};
  font-size: ${({ size }) => `${size || 16}px`};
  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"} !important;
  color: ${({ color, disabled }) =>
    disabled ? "rgba(0, 0, 0, 0.12)" : color || colors.appPrimiry};
`;
