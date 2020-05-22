import { getAppLanguages } from "../modules/actions";

export const mapStateToProps = ({ appBaseReducer }) => ({
  ...appBaseReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  getAppLanguages: () => dispatch(getAppLanguages()),
});
