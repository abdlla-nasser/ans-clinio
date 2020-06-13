import styled from "styled-components";
import Text from "./index";

export default styled(Text)`
  font-weight: ${({ fontWeight }) => `${fontWeight || 300}px`};
  font-size: ${({ fontSize }) => fontSize || "25px"};
`;
