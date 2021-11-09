import {createStore, applyMiddleware, compose} from 'redux';
import reduxOrder from 'redux-order';
import reducers from './reduces';
import DevTools from './DevTools';

const enhancer = compose(
  applyMiddleware(reduxOrder()),
  DevTools.instrument()
);

// createStore用来生成store;
const store = createStore(
  // 用于生成新的store,dispatch()时，会自动调用；
  reducers,
  enhancer
);

export default store;
