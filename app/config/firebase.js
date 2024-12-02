import { initializeApp } from '@react-native-firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyD98wGC69N3XEYngpRH9Ihcdccldf0OwTo",
    authDomain: "flyerdraft3.firebaseapp.com",
    projectId: "flyerdraft3",
    storageBucket: "flyerdraft3.firebasestorage.app",
    messagingSenderId: "484788812220",
    appId: "1:484788812220:web:819ce98e7fff590c5113b9",
    measurementId: "G-3GCNQJHE5P"
};

if (!firebase.apps.length) {
    initializeApp(firebaseConfig);
}

export default firebase;