function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}


//updated Date
let LastModified = new Date();  
document.getElementById("currentDate").innerHTML = LastModified;
