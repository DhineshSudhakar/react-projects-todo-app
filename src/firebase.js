import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUL2SiVJKDbYcIXCR5Q7ZFoYHQGB6tBxc",
    authDomain: "todo-app-7a457.firebaseapp.com",
    databaseURL: "https://todo-app-7a457.firebaseio.com",
    projectId: "todo-app-7a457",
    storageBucket: "todo-app-7a457.appspot.com",
    messagingSenderId: "265791988512",
    appId: "1:265791988512:web:770f88df55c040f01a2d45",
    measurementId: "G-SY5SJ8HF6Y"
});

const db = firebaseApp.firestore();

export default db;