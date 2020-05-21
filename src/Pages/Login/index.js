import React from "react";
import { connect } from "react-redux";
import Form from "./partials/form";
import Flex from "../../components/Flex";
import { mapStateToProps, mapDispatchToProps } from "./utils/selectors";
import { Container, Wrapper, Text, LogoImg } from "./utils/styled";
import LanguageDropdown from "../../components/LanguageDropdown";

import mainImageUrl from "../../assets/images/main.jpg";
import logo from "../../assets/images/clinioLogo.png";

const { useEffect } = React;

const LoginPage = ({
  history: { push },
  language,
  languages,
  getloginLabels,
  labels,
}) => {
  useEffect(() => {
    getloginLabels(language.flag);
  }, []);

  return (
    <Container image={mainImageUrl}>
      <Wrapper dir={language.dir}>
        <Flex justify="space-between">
          <LogoImg src={logo} alt="Clinio_Logo" />
          <LanguageDropdown
            userSelectedLanguage={language}
            allOtherUserLanguages={languages}
          />
        </Flex>
        <Text children="Sign in to your account" />
        <Form push={push} />
      </Wrapper>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
