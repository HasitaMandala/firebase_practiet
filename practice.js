// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCLkEuSEUaPd2qZJznNjfaC-HuW8kqsvoM",
    authDomain: "kwitter-92a07.firebaseapp.com",
    databaseURL: "https://kwitter-92a07-default-rtdb.firebaseio.com",
    projectId: "kwitter-92a07",
    storageBucket: "kwitter-92a07.appspot.com",
    messagingSenderId: "217249180125",
    appId: "1:217249180125:web:12173379cb6d5c2cbeae34"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });
}