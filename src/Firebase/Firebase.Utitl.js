import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const App = {
 apiKey: 'AIzaSyAWDnvCpb329C4Vt46z63ZNq_axyyKx66k',
 authDomain: 'react--clone-8ad29.firebaseapp.com',
 projectId: 'react--clone-8ad29',
 storageBucket: 'react--clone-8ad29.appspot.com',
 messagingSenderId: '319345219196',
 appId: '1:319345219196:web:9f671539e0dd7a31fe5bf9',
};

firebase.initializeApp(App);

// Exoprting
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
