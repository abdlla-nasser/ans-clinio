import { onInputChange } from "../modules/actions";

export const mapStateToProps = ({}) => ({});

export const mapDispatchToProps = (dispatch) => ({
  onInputChange: (name) => ({ target: { value } }) =>
    dispatch(onInputChange({ name, value })),
});
