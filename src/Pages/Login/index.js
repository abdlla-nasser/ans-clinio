import React from "react";
import { connect } from "react-redux";
import Form from "./partials/form";
import Flex from "../../components/Flex";
import { mapStateToProps, mapDispatchToProps } from "./utils/selectors";
import { Container, Wrapper, Text, LogoImg } from "./utils/styled";
import CountriesDropdown from "../../components/AppHeader/countryDropdown";
import { FlagListImg } from "../../components/AppHeader/styled";
import { getLanguageFlag } from "../../utils/getCountry";

import mainImageUrl from "../../assets/images/main.jpg";
import logo from "../../assets/images/clinioLogo.png";

const { useCallback } = React;

const LoginPage = ({
  history: { push },
  language,
  languages,
  changeAppLanguage,
}) => {
  const getOtherLanguages = useCallback(() => {
    let otherLanguagList = [];
    let tempArr = languages.filter((lang) => lang !== language);
    tempArr.map((lang) =>
      otherLanguagList.push({
        label: <FlagListImg src={getLanguageFlag(lang)} />,
        onClick: () => changeAppLanguage(lang),
      })
    );
    return otherLanguagList;
    //eslint-disable-next-line
  }, [language]);

  return (
    <Container image={mainImageUrl}>
      <Wrapper>
        <Flex justify="space-between">
          <LogoImg src={logo} alt="Clinio_Logo" />
          <CountriesDropdown
            selectedLanguage={language}
            otherLanguages={getOtherLanguages()}
          />
        </Flex>
        <Text children="Sign in to your account" />
        <Form push={push} />
      </Wrapper>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
