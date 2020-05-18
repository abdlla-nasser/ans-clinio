import styled from 'styled-components';
import { colors } from '../../../utlities/theme';

export const Container = styled.ul`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  -webkit-font-feature-settings: 'tnum';
  font-feature-settings: 'tnum';
`;

export const PageItem = styled.li`
  display: inline-block;
  min-width: 32px;
  height: 32px;
  margin-inline-end: 8px;
  font-family: Roboto;
  line-height: 30px;
  text-align: center;
  vertical-align: middle;
  list-style: none;
  background-color: #fff;
  border-radius: 4px;
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: ${({ disabled }) =>
    disabled ? 'not-allowed' : 'pointer'} !important;
  ${({ noBorder, selected }) =>
    !noBorder &&
    `
    border: 1px solid ${selected ? colors.appPrimiry : '#d9d9d9'}`};
`;
