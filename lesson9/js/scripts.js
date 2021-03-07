function toggleMenu() {
  document.getElementsByClassName("navigation")[0].classList.toggle("responsive")
}


//updated Date
let LastModified = new Date();  
document.getElementById("currentDate").innerHTML = LastModified;


const completeDate = new Date();
let today = completeDate.getDay();
let element = document.getElementById('pancakeBanner');
if (today == 6) {
    element.style.display = "block";
}

