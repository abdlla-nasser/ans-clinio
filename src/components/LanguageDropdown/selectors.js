import { changeAppLanguage } from "../../Pages/BasePage/modules/actions";

export const mapStateToProps = ({
  appBaseReducer: { language, languages },
}) => ({
  currentLanguage: language,
  allLanguages: languages,
});

export const mapDispatchToProps = (dispatch) => ({
  changeAppLanguage: (selectedLang) =>
    dispatch(changeAppLanguage(selectedLang)),
});
