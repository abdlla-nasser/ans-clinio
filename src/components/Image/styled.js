import styled from "styled-components";

export default styled.img`
  cursor: pointer;
  ${({ width, height, borderRaduis = 5 }) => `
      border-radius: ${borderRaduis}px;
      width: ${width || "46px"};
      height: ${height || "60px"};
  `};
`;
