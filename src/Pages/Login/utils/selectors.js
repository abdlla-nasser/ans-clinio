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
    emailorphoneno:
      (loginLabels && loginLabels.emailorphoneno) || "emailorphoneno",
    pass: (loginLabels && loginLabels.password) || "password",
    signin: (loginLabels && loginLabels.signin) || "signin",
    exit: (loginLabels && loginLabels.exit) || "exit",
    donthaveaccount:
      (loginLabels && loginLabels.donthaveaccount) || "donthaveaccount",
    createaccount:
      (loginLabels && loginLabels.createaccount) || "createaccount",
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
