import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import authReducer from '../reducers/authReducer';
import alertReducer from '../reducers/alertReducer';
import eventReducer from '../reducers/eventReducer';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export default createStore(
  combineReducers({
    authReducer,
    alertReducer,
    eventReducer
  }),
  applyMiddleware(middleware, createLogger(), promise())
);
