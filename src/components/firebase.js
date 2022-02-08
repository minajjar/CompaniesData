import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCuAEd31K_4_MzdEDC7L-gA0SiY6aJ1AQU",
    authDomain: "testproject1-d51f3.firebaseapp.com",
    projectId: "testproject1-d51f3",
    storageBucket: "testproject1-d51f3.appspot.com",
    messagingSenderId: "182816345305",
    appId: "1:182816345305:web:6b968eeb7c5ce4c47e42c8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;