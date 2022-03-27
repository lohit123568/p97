function addUser() {
    user__name = document.getElementById("user__name").value;
    localStorage.setItem("user__name", user__name);
    window.location = "kwitter_room.html";
}
function back() {
    window.location.replace("start.html");
}