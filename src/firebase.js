import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCKnh963hkH89hrIH0xy2Rq-Q46SsQnQlM',
  authDomain: 'train-74915.firebaseapp.com',
  databaseURL:
    'https://train-74915-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'train-74915',
  storageBucket: 'train-74915.appspot.com',
  messagingSenderId: '804363691615',
  appId: '1:804363691615:web:45474e3d9e105ae87c9dea',
};
firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore()
firebase.firestore().settings({ timestampInSnapshots: true });

export default firebase;
