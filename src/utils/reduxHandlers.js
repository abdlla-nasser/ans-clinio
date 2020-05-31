export const dispatchHandler = ({ getDispatchToProps, createDispatcher }) => (
  dispatch
) => {
  let dispatchedActions = createDispatcher(dispatch);
  if (getDispatchToProps) {
    const newDispatcher = getDispatchToProps(dispatch);
    dispatchedActions = { ...dispatchedActions, ...newDispatcher };
  }
  return dispatchedActions;
};

export const stateHandler = (getState) => (state) => {
  const {
    appBaseReducer: { language },
  } = state;
  const newDataState = getState ? getState(state) : null;

  return {
    language,
    ...newDataState,
  };
};
