// Import stylesheets
import "./style.css";

// Import javascript files
import "./js/add-element.js";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

import * as firebaseui from "firebaseui";

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: "AIzaSyAo1nuUQ0Gq6G5vrarlFxEYfPFoqqfTQ0U",
  authDomain: "grocerylist-5c3d4.firebaseapp.com",
  projectId: "grocerylist-5c3d4",
  storageBucket: "grocerylist-5c3d4.appspot.com",
  messagingSenderId: "955144141844",
  appId: "1:955144141844:web:83fe14498af775a000fb01",
  measurementId: "G-5017YGWBH2"
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$("#save").click(function() {
// document.querySelectorAll('li') ==> nodelist
// for loop to go through each nodelist
// and then get the text content
$(this).text("saved");
  $('li').each(function(){
    var value = $(this).text();
    console.log(value);

    firebase
    .firestore()
    .collection("mylist")
    .add({
      item: value
    });
  });
});
