import { changeAppLanguage } from "../../Pages/BasePage/modules/actions";

export const mapStateToProps = ({
  appBaseReducer: { language, languages },
}) => ({
  userSelectedLanguage: language,
  allOtherUserLanguages: languages,
});

export const mapDispatchToProps = (dispatch) => ({
  changeAppLanguage: (selectedLang) =>
    dispatch(changeAppLanguage(selectedLang)),
});
