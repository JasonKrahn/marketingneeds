// used to grab onto firebase -> connection
var firebaseConfig = {
    apiKey: "AIzaSyAAxVbOTVPjJSSem2UbSWBqtVj6W6nL3L0",
    authDomain: "form-9df88.firebaseapp.com",
    databaseURL: "https://form-9df88-default-rtdb.firebaseio.com",
    projectId: "form-9df88",
    storageBucket: "form-9df88.appspot.com",
    messagingSenderId: "899881916214",
    appId: "1:899881916214:web:5624fc7f28d5ab1bc4c597"
  };

//init firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// start grabbing our DOM Element
const sendBtn = document.querySelector('#send');

let userName = document.querySelector('#userFullName');
let userEmail = document.querySelector('#userEmail');
let userMessage = document.querySelector('#userMessage')

const db = firestore.collection("contactData");
if (sendBtn) {
sendBtn.addEventListener('click', function() {
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userMessageInput = userMessage.value

// access the database collction
    db.doc().set({
        name: userNameInput,
        email: userEmailInput,
        message: userMessageInput
    })
    .then(function() {
        console.log("Data Saved");
    })
    .catch(function(error) {
        console.log(error);
    });
})
};
