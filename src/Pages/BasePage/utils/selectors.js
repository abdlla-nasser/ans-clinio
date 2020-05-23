import {
  getAppLanguages,
  setDefaultLangToBrowserLang,
} from "../modules/actions";

export const mapStateToProps = ({ appBaseReducer }) => ({
  ...appBaseReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getAppLanguages: () => dispatch(getAppLanguages()),
  setDefaultLangToBrowserLang: () => dispatch(setDefaultLangToBrowserLang()),
});
