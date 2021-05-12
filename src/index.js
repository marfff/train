import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig}> */}
      <App />
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
