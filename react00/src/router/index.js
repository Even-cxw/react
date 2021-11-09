import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
// 热加载模块
import {hot} from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';
import App from '../containers/app';
import Docs from '../containers/docs';
import Even from '../containers/even';
import About from '../containers/about/about.js';
import industry from '../containers/industry/industry.js';
import product from '../containers/product/product.js';
import technology from '../containers/technology/technology.js';

// 从新封装路由组件；
const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      // key: 解决组件从新渲染问题；
      <div key={props.location.key}>
        <Component {...props} ><Switch>{children}</Switch></Component>
      </div>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          {/* 根组件为APP */}
          <Router path="/" component={App} >
            <Router exact path="/docs" component={Docs} />
            <Router exact path="/even" component={Even} />
            <Router exact path="/about" component={About} />
            <Router exact path="/technology" component={technology} />
            <Router exact path="/industry" component={industry} />
            <Router exact path="/product" component={product} />
          </Router>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);