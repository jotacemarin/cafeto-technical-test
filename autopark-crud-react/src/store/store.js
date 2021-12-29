import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';
import reducer from './reducer';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware();
  } else {
    return applyMiddleware(createLogger())
  }
};

export const store = createStore(
  reducer, composeWithDevTools(getMiddleware())
);
