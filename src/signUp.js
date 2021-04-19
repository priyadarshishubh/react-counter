import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import signIn from "./components/signInPage";
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<signIn />, document.getElementById('squareroot'));
registerServiceWorker();
