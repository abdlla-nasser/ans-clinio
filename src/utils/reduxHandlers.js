export const handlerDispatchers = ({
  getDispacthToProps,
  createDisptacher
}) => dispatch => {
  let disptachedActions = createDisptacher(dispatch);
  if (getDispacthToProps) {
    const newDispatcher = getDispacthToProps(dispatch);
    disptachedActions = { ...disptachedActions, ...newDispatcher };
  }
  return disptachedActions;
};

export const stateHandler = getState => state => {
  const {
    loginReducer: { privData }
  } = state;
  const newDataState = getState ? getState(state) : null;

  return {
    langId: privData && privData.language_id,
    ...newDataState
  };
};
