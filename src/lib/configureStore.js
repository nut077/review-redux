import { createStore, applyMiddleware } from 'redux';
import { logger, storage } from '../middlewares';
import rootReducer from '../reducers';

export default function(initialState) {
  const middlewares = [logger, storage];

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}
