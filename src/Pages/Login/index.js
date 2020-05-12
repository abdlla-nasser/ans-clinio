import React from "react";
import { connect } from "react-redux";
import Form from "./partials/form";
import { Container, Wrapper, Text, LogoImg } from "./utils/styled";

import mainImageUrl from "../../assets/images/main.jpg";
import logo from "../../assets/images/clinioLogo.png";

const LoginPage = ({ history: { push } }) => {
  return (
    <Container image={mainImageUrl}>
      <Wrapper>
        <LogoImg src={logo} alt="Clinio_Logo" />
        <Text children="Sign in to your account" />
        <Form push={push} />
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
