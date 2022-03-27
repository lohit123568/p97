const firebaseConfig = {
      apiKey: "AIzaSyAOceDlrB04ssSm1T8nbuc73CtRvgt91xI",
      authDomain: "kwitter-33ba9.firebaseapp.com",
      databaseURL: "https://kwitter-33ba9-default-rtdb.firebaseio.com",
      projectId: "kwitter-33ba9",
      storageBucket: "kwitter-33ba9.appspot.com",
      messagingSenderId: "976433667805",
      appId: "1:976433667805:web:8f7f0da52d7d9a9ef48534",
      measurementId: "G-4G19SGT6T8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id="+Room_names+ "onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function logout(){
      localStorage.removeItem("user__name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
 function addRoom() {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
       });
       localStorage.setItem("room_name", room_name);
       window.location ="kwitter_page.html";
 }
 function redirectToRoomName(name) {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
 }
 function back() {
      window.location.replace("start.html");
  }