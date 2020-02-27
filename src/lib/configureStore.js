import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { storage } from '../middlewares';
import rootReducer from '../reducers';

export default function(initialState) {
  const middlewares = [logger, storage];

  return createStore(
    rootReducer,
    initialState,
    compose(
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(...middlewares)
    )
  );
}
