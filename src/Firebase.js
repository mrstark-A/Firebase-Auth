import firebase from "firebase/app";
import "firebase/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBdiGKkBx1dLH9EyDQZtHR6KwFBVe5zyyI",
  authDomain: "socialapp-b1b98.firebaseapp.com",
  databaseURL: "https://socialapp-b1b98.firebaseio.com",
  projectId: "socialapp-b1b98",
  storageBucket: "socialapp-b1b98.appspot.com",
  messagingSenderId: "1045733017209",
  appId: "1:1045733017209:web:a40661b6987e30660f76a8",
  measurementId: "G-4QNQPEMXJ8",
});
const auth = app.auth();
const provider = new firebase.auth.GithubAuthProvider();
const provider1 = new firebase.auth.GithubAuthProvider();
export default app;
export { auth, provider, provider1 };
