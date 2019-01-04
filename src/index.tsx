import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Client from './Client';
import registerServiceWorker from './registerServiceWorker';
import './styling/foundation.css';
import './styling/style.css';

ReactDOM.render(
  <Client />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
