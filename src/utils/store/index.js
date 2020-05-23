import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import reducers from "./injectors/reducers";
// eslint-disable-next-line
import rootSaga from "./injectors/sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  process.env.NODE_ENV === "development" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

export const store = createStore(reducers, {}, enhancer);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
