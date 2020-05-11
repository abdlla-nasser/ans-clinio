import styled from "styled-components";

export const Container = styled.section`
  background: ${({ image }) => `url(${image}) center center no-repeat`};
  width: 100%;
  min-height: inherit;
  margin-top: 47px;
  object-fit: contain;
  border-radius: 5px;
  box-shadow: 10.5px 18.2px 39.6px 6.4px rgba(17, 81, 125, 0.15);
  background-color: #fff;
  box-sizing: border-box;
`;

export const Wrapper = styled.section`
  margin: 0px 142px;
  min-width: 80%;
  padding: 108px 0px;
`;

export const Text = styled.p`
  height: 20px;
  font-family: Roboto;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.17;
  ${({ isSocialText }) =>
    isSocialText &&
    `
    height: 15px;
    font-size: 14px;
    line-height: 0.17;
    text-align: center;
    color: #326dbc;
  `}
`;

export const FormContainer = styled.form`
  margin-top: 5px;
  margin-bottom: 15px;
`;

export const LogoImg = styled.img`
  width: 112px;
  height: 47px;
  object-fit: contain;
`;
