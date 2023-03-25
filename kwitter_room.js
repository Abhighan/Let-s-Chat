
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDA1a6AaqZi25dVlNw8ep35AQDRSEgNOGQ",
      authDomain: "kwitter-d31aa.firebaseapp.com",
      databaseURL: "https://kwitter-d31aa-default-rtdb.firebaseio.com",
      projectId: "kwitter-d31aa",
      storageBucket: "kwitter-d31aa.appspot.com",
      messagingSenderId: "268628004730",
      appId: "1:268628004730:web:2036e709f363ce8b7390c3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

