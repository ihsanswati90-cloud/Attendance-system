function markAttendance() {
    let name = document.getElementById("name").value;
    if(name === "") {
        alert("Enter name!");
        return;
    }
    let list = document.getElementById("list");
    let li = document.createElement("li");
    li.textContent = name + " - Present";
    list.appendChild(li);
    document.getElementById("name").value = "";
}
