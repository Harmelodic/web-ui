import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

const appRoot = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    appRoot
);
