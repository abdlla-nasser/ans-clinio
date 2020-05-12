import { Link } from "react-router-dom";
import styled from "styled-components";

export default styled(Link)`
  text-decoration: underline;
  font-size: ${({ fontSize }) => `${fontSize || 13}px`};
  font-weight: bold;
  font-family: Roboto;
  line-height: ${({ lineheight }) => `${lineheight}px`};
  ${({ center }) => center && `text-align: center`};
  color: ${({ color }) => color || "#c5cdd6"};
  ${({ height }) =>
    height &&
    `
    min-height: 34px;
    height: ${height};
  `};
  ${({ width }) => width && `min-width: ${width}`};
  ${({ nohover, color }) =>
    nohover &&
    `
    &:hover {
        color: ${color}
      };
  `};
`;
