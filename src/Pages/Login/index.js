import React from "react";
import { connect } from "react-redux";
import Form from "./partials/form";
import Flex from "../../components/Flex";
import { usePrevious } from "../../utils/customUseHooks";
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
  requestPageLabels,
  labels: { signintoyouraccount },
}) => {
  const prevLang = usePrevious(language.language_code);
  const isLangChanged =
    language.language_code && language.language_code !== prevLang;

  useEffect(() => {
    requestPageLabels(language.language_code);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isLangChanged) requestPageLabels(language.language_code);
    //eslint-disable-next-line
  }, [isLangChanged]);

  const dir = language.r2l ? "rtl" : "ltr";
  return (
    <Container image={mainImageUrl}>
      <Wrapper dir={dir}>
        <Flex justify="space-between">
          <LogoImg src={logo} alt="Clinio_Logo" />
          <LanguageDropdown
            userSelectedLanguage={language}
            allOtherUserLanguages={languages}
          />
        </Flex>
        <Text children={signintoyouraccount} />
        <Form push={push} />
      </Wrapper>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
