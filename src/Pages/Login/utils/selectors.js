import { onInputChange, onClickLogin } from "../modules/actions";

export const mapStateToProps = ({ loginReducer }) => ({
  ...loginReducer,
});

export const mapDispatchToProps = (dispatch) => ({
  onInputChange: (name) => ({ target: { value } }) =>
    dispatch(onInputChange({ name, value })),
  onLogin: () => dispatch(onClickLogin()),
});
