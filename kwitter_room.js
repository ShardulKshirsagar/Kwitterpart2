
//ADD YOUR // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDNrlwDnj4NG8bafylBkeQZhhualCPrI5w",
      authDomain: "kwitter-b08ba.firebaseapp.com",
      projectId: "kwitter-b08ba",
      storageBucket: "kwitter-b08ba.appspot.com",
      messagingSenderId: "865674441440",
      appId: "1:865674441440:web:ddc3884135022545b35685"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
User_name=localStorage.getItem("User_name");
function getData() {
      firebase.database().ref("/").on('value', 
      function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(
                  function(childSnapshot) {
                        childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
