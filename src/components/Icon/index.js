import styled from "styled-components";
import { colors } from "../../utils/theme";

export default styled.img`
  line-height: ${({ lineheight }) => `${lineheight || 20}px`};
  margin: ${({ margin }) => margin || "5px"};
  font-size: ${({ size }) => `${size || 16}px`};
  cursor: ${({ disabled }) =>
    disabled ? "not-allowed" : "pointer"} !important;
  color: ${({ color, disabled }) =>
    disabled ? "rgba(0, 0, 0, 0.12)" : color || colors.appPrimiry};
`;
