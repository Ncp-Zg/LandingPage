import firebase from "firebase/app"



const firebaseConfig ={

};

const fire = firebase.initializeApp(firebaseConfig);


export const auth = fire.auth();