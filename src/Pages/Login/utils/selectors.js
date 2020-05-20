import { onInputChange, onLogin } from "../modules/actions";
import { changeAppLanguage } from "../../BasePage/modules/actions";

export const mapStateToProps = ({
  loginReducer,
  appBaseReducer: { language, languages },
}) => ({
  language,
  languages,
  ...loginReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  onInputChange: (name) => ({ target: { value } }) =>
    dispatch(onInputChange({ name, value })),
  onLogin: (pushAction) => dispatch(onLogin(pushAction)),
  changeAppLanguage: (selectedLang) =>
    dispatch(changeAppLanguage(selectedLang)),
});
