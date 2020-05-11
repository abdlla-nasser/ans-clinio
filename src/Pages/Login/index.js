import React from "react";
import { connect } from "react-redux";
import { Container, Wrapper, Text, LogoImg } from "./utils/styled";

import mainImageUrl from "../../assets/images/main.jpg";
import logo from "../../assets/images/clinioLogo.png";

const LoginPage = ({ history: { push } }) => {
  return (
    <Container image={mainImageUrl}>
      <Wrapper>
        <LogoImg src={logo} alt="Clinio_Logo" />
        <Text children="Sign in to your account" />
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
