import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Client from './Client'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Client />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
