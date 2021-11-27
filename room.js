var firebaseConfig = {
    apiKey: "AIzaSyAXL7EaWNDccM4UTNBUxG9v4BO7yApZ9lc",
    authDomain: "lets-chat-c0ecd.firebaseapp.com",
    databaseURL: "https://lets-chat-c0ecd-default-rtdb.firebaseio.com",
    projectId: "lets-chat-c0ecd",
    storageBucket: "lets-chat-c0ecd.appspot.com",
    messagingSenderId: "494726459906",
    appId: "1:494726459906:web:c10450c1283454cfd76d1b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("user_name")
  document.getElementById("welcome_tag").innerHTML= "Welcome "+ username;

  function add(){

     room= document.getElementById("room_input").value;
     localStorage.setItem("room_name", room);
     firebase.database().ref("/").child(room).update({
         purpose: "adding a room name"
      });
      window.location= "kwitter_page.html";
  };

  function logout(){
      window.location= "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
  }

  function getData() {
       firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("list").innerHTML = "";
        snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
             Room_names = childKey;
              //start code
                console.log("Room name = " + Room_names);
                row= "<div class='room_style' id="+ Room_names + " onclick= 'redirecttoRoomName(this.id)'> #"+ Room_names + "</div> <hr>"
                document.getElementById("list").innerHTML += row;
              //end code
        });
    });

}

getData();

function redirecttoRoomName(room_clicked){
          console.log("Room_name = " + room_clicked);
          localStorage.setItem("room_name", room_clicked);
          window.location= "index.html";
}
