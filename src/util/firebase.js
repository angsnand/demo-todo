// author: angshuman

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxpG2Q7GUhA1GKn12OPz2wAzeJ08TSxMk",
    authDomain: "fir-todo-frbsdb.firebaseapp.com",
    databaseURL: "https://fir-todo-frbsdb.firebaseio.com",
    projectId: "fir-todo-frbsdb",
    storageBucket: "fir-todo-frbsdb.appspot.com",
    messagingSenderId: "514300905141",
    appId: "1:514300905141:web:a22a0546c783d6c51320fc",
    measurementId: "G-6X4KWX1JF8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;