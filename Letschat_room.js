  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCXGyoEbWGZOEfRUtXCkQzTBiN1TdV7gmo",
      authDomain: "c-93laya.firebaseapp.com",
      projectId: "c-93laya",
      storageBucket: "c-93laya.appspot.com",
      messagingSenderId: "667502449369",
      appId: "1:667502449369:web:9c132daaa538306991e4c8"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
