import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbUECKvKw-YhiHBgJ4THHkiJAyuNlbQwI",
  authDomain: "linkedin-clone-a896d.firebaseapp.com",
  projectId: "linkedin-clone-a896d",
  storageBucket: "linkedin-clone-a896d.appspot.com",
  messagingSenderId: "591905010597",
  appId: "1:591905010597:web:d46053a49a923069e5ee4c"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

  