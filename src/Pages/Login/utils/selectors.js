import { requestPageLabels } from "../../../global/actions/labels";
import { onInputChange, onLogin } from "../modules/actions";
import { changeAppLanguage } from "../../BasePage/modules/actions";

export const mapStateToProps = ({
  loginReducer,
  appBaseReducer: { language, languages },
  labelsReducer: { loginLabels },
}) => ({
  language,
  languages,
  ...loginReducer,
  labels: {
    signintoyouraccount:
      (loginLabels && loginLabels.signintoyouraccount) || "signintoyouraccount",
  },
});

export const mapDispatchToProps = (dispatch) => ({
  requestPageLabels: (langCode) =>
    dispatch(requestPageLabels("login", langCode)),
  onInputChange: (name) => ({ target: { value } }) =>
    dispatch(onInputChange({ name, value })),
  onLogin: (pushAction) => dispatch(onLogin(pushAction)),
  changeAppLanguage: (selectedLang) =>
    dispatch(changeAppLanguage(selectedLang)),
});
