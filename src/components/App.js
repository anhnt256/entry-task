import React from 'react';
import PropTypes from 'prop-types';
import HomeContainer from '../containers/homeContainer';
// import EventContainer from '../containers/eventContainer';

import { Framework7App, View, Pages, Page, Panel } from 'framework7-react';

import { routes } from '../helpers/routes';

let currentRoute;

export const getCurrentRoute = () => currentRoute;

const LeftPanel = (props, context) => (
  <Panel left reveal layout="dark">
    <View id="left-panel-view" navbarThrough dynamicNavbar="true">
      <Pages>
        <Page>
          <h1>Left Panel</h1>
        </Page>
      </Pages>
    </View>
  </Panel>
);

LeftPanel.contextTypes = {
  framework7AppContext: PropTypes.object
};

class App extends React.Component {
  render() {
    return (
      <Framework7App
        themeType="ios"
        onRouteChange={route => (currentRoute = route)}
        routes={routes}
      >
        <HomeContainer />
        <LeftPanel />
      </Framework7App>
    );
  }
}

export default App;
