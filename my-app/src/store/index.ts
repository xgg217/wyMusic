import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import reducer from './reducer/index';

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
));