export const dispatchHandler = ({ mapDispatchToProps, createDispatcher }) => (
  dispatch
) => {
  let dispatchedActions = createDispatcher(dispatch);
  if (mapDispatchToProps) {
    const newDispatcher = mapDispatchToProps(dispatch);
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
