import styled from "styled-components";

export const getTextProps = ({ size = 15, fontfamily, fontweight }) => {
  return `
    font-size: ${size}px;
    font-family: ${fontfamily || "Roboto"};
    font-weight: ${fontweight || "bold"};;
  `;
};

export default styled.p`
  ${({ width, flex, color, align, margin, lineHeight, ...otherStyleProps }) => `
  display: inline;
  margin: ${margin || "0px"};
  line-height: ${lineHeight};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: ${width};
  color: ${color};
  text-align: ${align};
  flex: ${flex};
  ${getTextProps(otherStyleProps)}
`};
`;
