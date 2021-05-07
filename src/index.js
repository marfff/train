import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import firebase from "./firebase";
// import firebase/firestore


// firebase.initializeApp({

// const firebaseConfig = {
//   apiKey: 'AIzaSyCKnh963hkH89hrIH0xy2Rq-Q46SsQnQlM',
//   authDomain: 'train-74915.firebaseapp.com',
//   databaseURL:
//     'https://train-74915-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'train-74915',
//   storageBucket: 'train-74915.appspot.com',
//   messagingSenderId: '804363691615',
//   appId: '1:804363691615:web:45474e3d9e105ae87c9dea',
// };

// firebase.initializeApp({
//   apiKey: 'AIzaSyCKnh963hkH89hrIH0xy2Rq-Q46SsQnQlM',
//   authDomain: 'train-74915.firebaseapp.com',
//   projectId: 'train-74915'
// });

// var db = firebase.firestore();
// // firestore - clear;

ReactDOM.render(
  <React.StrictMode>
    {/* <FirebaseAppProvider firebaseConfig={firebaseConfig}> */}
      <App />
    {/* </FirebaseAppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
