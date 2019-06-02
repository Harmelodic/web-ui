import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './containers/Home';
import ComponentViewer from './containers/ComponentViewer';

/**
 * App
 */
export default class App extends React.Component {
  /**
   * @return {HTMLElement} App
   */
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={ComponentViewer} />
      </Switch>
    );
  }
}
