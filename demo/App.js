import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import ComponentViewer from './containers/ComponentViewer';

/**
 * App
 * @return {HTMLElement} App
 */
export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:id" component={ComponentViewer} />
    </Switch>
  );
}
