import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyCPamzMARjHvSDtKeHUIUZtLn5yhQvvoVE',
  authDomain: 'restaurantapp-8102a.firebaseapp.com',
  databaseURL: 'https://restaurantapp-8102a-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-8102a',
  storageBucket: 'restaurantapp-8102a.appspot.com',
  messagingSenderId: '190292721098',
  appId: '1:190292721098:web:9fe0e0bd4b8ba2a3336333',
}
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
