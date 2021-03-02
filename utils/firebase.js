import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
apiKey: "AIzaSyDG8nD5OdaK-bGeN0QhV1uI253wuCNf5eA",
authDomain: "restaurants-c9ee6.firebaseapp.com",
projectId: "restaurants-c9ee6",
storageBucket: "restaurants-c9ee6.appspot.com",
messagingSenderId: "22826011913",
appId: "1:22826011913:web:013dd6bbd1d94ca71b57d8"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)