import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { onInputChange } from "./modules/actions";
import { usePrevious } from "../../utils/customUseHooks";
import { requestPageLabels } from "../../global/actions/labels";
import { onLogin } from "./modules/actions";
import { NewForm } from "./partials/NewForm";
import Flex from "../../components/Flex";
import { Container, Wrapper, Text, LogoImg } from "./utils/styled";
import LanguageDropdown from "../../components/LanguageDropdown";

import mainImageUrl from "../../assets/images/main.jpg";
import logo from "../../assets/images/clinioLogo.png";

const LoginPage = () => {
  const { loginLabels } = useSelector(state => state.labelsReducer);
  const { formError, isSubmittingLogin } = useSelector(state => state.loginReducer);
  const { language, languages } = useSelector(state => state.appBaseReducer)
  const { push } = useHistory();
  const dispatch = useDispatch()
  const [state, setState] = useState({
    form: {
      username: "",
      password: ""
    },
    errors: {
      usernameError: "",
      passwordError: ""
    }
  });
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(onInputChange({ name: "username", value: state.form.username }))
    dispatch(onInputChange({ name: "password", value: state.form.password }))
    if (!state.form.username) {
      setState({ ...state, errors: { usernameError: "please enter an email" } })
    }
    if (!state.form.password) {
      setState({ ...state, errors: { passwordError: "please enter a password" } })
    }
    if (!state.errors.usernameError && !state.errors.passwordError) {
      dispatch(onLogin(push))
    }
  }
  const prevLang = usePrevious(language.language_code);
  const isLangChanged = language && language.language_code !== prevLang;

  useEffect(() => {
    if (isLangChanged) {
      dispatch(requestPageLabels("login", language.language_code))
    }
    //eslint-disable-next-line
  }, [isLangChanged]);

  const dir = language.r2l ? "rtl" : "ltr";
  if (loginLabels) return (
    <Container image={mainImageUrl}>
      <Wrapper dir={dir}>
        <Flex justify="space-between">
          <LogoImg src={logo} alt="Clinio_Logo" />
          <LanguageDropdown
            userSelectedLanguage={language}
            allOtherUserLanguages={languages}
          />
        </Flex>
        <Text children={loginLabels.signintoyouraccount} />
        <NewForm state={state} setState={setState} labels={loginLabels} handleSubmit={handleSubmit} formError={formError} isSubmittingLogin={isSubmittingLogin} />
      </Wrapper>
    </Container>
  )
  return null;
};

export default LoginPage;
