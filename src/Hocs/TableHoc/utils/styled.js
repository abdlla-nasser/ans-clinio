import styled from "styled-components";
import Button from "antd/lib/button";

export const StyledButton = styled(Button)`
  width: 90px;
  margin-inline-end: ${({ type }) => type && "8px"};
`;

export const RenderView = styled.div`
  padding: 8px;
`;

export const ActionContainer = styled.div`
  width: 95%;
  margin: auto;
`;

export const StyledIcon = styled.img`
  cursor: pointer;
  height: 20px;
  width: 20px;
`;
