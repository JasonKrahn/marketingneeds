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
let userMessage = document.querySelector('#userMessage')

function validateEmail(userEmailInput) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(userEmailInput);
  }

  function validate() {
    const $result = $("#result");
    let userEmailInput = $("#userEmail").val();
    $result.text("");
  
    if (validateEmail(userEmailInput)) {
      $result.text(email + " is valid :)");
      $result.css("color", "green");
    } else {
      $result.text(email + " is not valid :(");
      $result.css("color", "red");
    }
    return false;
  }
  
  $("#validate").on("click", validate);


const db = firestore.collection("test");
if (sendBtn && validateEmail()) {
sendBtn.addEventListener('click', function() {
    let userNameInput = userName.value;
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
