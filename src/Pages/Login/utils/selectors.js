import { onInputChange, onLogin } from "../modules/actions";

export const mapStateToProps = ({ loginReducer }) => ({
  ...loginReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  onInputChange: (name) => ({ target: { value } }) =>
    dispatch(onInputChange({ name, value })),
  onLogin: (pushAction) => dispatch(onLogin(pushAction)),
});
