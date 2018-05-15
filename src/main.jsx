
import React from 'react';
import ReactDOM from 'react-dom';
import configStore from './store/configStore';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route, IndexRoute, Link, Redirect } from 'react-router-dom';
import App from "./index";

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('wrapper')
);
