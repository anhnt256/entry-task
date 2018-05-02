import 'framework7/dist/css/framework7.ios.min.css';
import 'framework7/dist/css/framework7.ios.colors.min.css';
import './assets/css/app.css';

import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store, { history } from './helpers/store';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Events from './containers/eventContainer';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/events/" component={Events} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
