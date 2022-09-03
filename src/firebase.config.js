import { getApp, getApps, initializeApp} from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDp8VFhE05mhFLXSCcmFUcAKiCQJ0Ud428",
    authDomain: "all-in-one-food-52248.firebaseapp.com",
    databaseURL: "https://all-in-one-food-52248-default-rtdb.firebaseio.com",
    projectId: "all-in-one-food-52248",
    storageBucket: "all-in-one-food-52248.appspot.com",
    messagingSenderId: "1058985652917",
    appId: "1:1058985652917:web:fc2dac2f67dae7ccc844fc"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export {app , firestore , storage};