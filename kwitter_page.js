//YOUR FIREBASE LINKS
/*const firebaseConfig = {
      apiKey: "AIzaSyBbErVEmhVO9cWJIWfHY-aOn0XmlSitlWQ",
      authDomain: "kwitter-is-not-for-my-age.firebaseapp.com",
      databaseURL: "https://kwitter-is-not-for-my-age-default-rtdb.firebaseio.com",
      projectId: "kwitter-is-not-for-my-age",
      storageBucket: "kwitter-is-not-for-my-age.appspot.com",
      messagingSenderId: "533199618645",
      appId: "1:533199618645:web:3d783a2524c2bdd5e68adc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);*/
    var firebaseConfig = {
      apiKey: "AIzaSyANNkz18MxaPTd8BKQz9OS1-W64tHCi89Y",
      authDomain: "kwitterisnice.firebaseapp.com",
      databaseURL: "https://kwitterisnice-default-rtdb.firebaseio.com",
      projectId: "kwitterisnice",
      storageBucket: "kwitterisnice.appspot.com",
      messagingSenderId: "178933724713",
      appId: "1:178933724713:web:adc47d6e61e6fb1a8b0e38"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("oof");
room_name=localStorage.getItem("oof1");
     function sendtofrnds(){
      msg =  document.getElementById("sendput").value;
      firebase.database().ref(room_name).push({
      name:username, message:msg, like:0 
      });      

      document.getElementById("sendput").value ="";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
