import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAyUk2ke2eWT852LQ2nK9P0_Kps7M9ffJg',
  authDomain: 'cs-4261-1.firebaseapp.com',
  databaseURL: 'https://cs-4261-1.firebaseio.com',
  projectId: 'cs-4261-1',
  storageBucket: 'cs-4261-1.appspot.com',
  messagingSenderId: '441489768719',
  appId: '1:441489768719:web:f26c51e4012efa44abfe7a'
};

firebase.initializeApp(config);

export default firebase;
