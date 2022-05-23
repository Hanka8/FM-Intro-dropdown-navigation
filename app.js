// Displaying dropdown on big screen and changing arrow
const dropBtn1 = document.getElementById("droppingBtn1");
const dropdown1 = document.getElementById("dropdown1");
const dropIco1 = document.getElementById("dropIco1");

dropBtn1.addEventListener("click", function(){
  if (dropdown1.classList.contains("hide")){
    dropdown1.classList.add("showDrop1");
    dropdown1.classList.remove("hide");
    dropIco1.style.backgroundImage = "url('images/icon-arrow-up.svg')";
  } else {
    dropdown1.classList.remove("showDrop1");
    dropdown1.classList.add("hide");
    dropIco1.style.backgroundImage = "url('images/icon-arrow-down.svg')";
  }
});

const dropBtn2 = document.getElementById("droppingBtn2");
const dropdown2 = document.getElementById("dropdown2");
const dropIco2 = document.getElementById("dropIco2");

dropBtn2.addEventListener("click", function(){
  if (dropdown2.classList.contains("hide")){
    dropdown2.classList.add("showDrop2");
    dropdown2.classList.remove("hide");
    dropIco2.style.backgroundImage = "url('images/icon-arrow-up.svg')";
  } else {
    dropdown2.classList.remove("showDrop2");
    dropdown2.classList.add("hide");
    dropIco2.style.backgroundImage = "url('images/icon-arrow-down.svg')";
  }
});

// Displaying menu on small screens
