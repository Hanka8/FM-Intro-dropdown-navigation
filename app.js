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

// Button animation and displaying menu on small screen
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function() {
  menuBtn.classList.toggle("change");
  menu.classList.toggle("hideMenu");
  menu.classList.toggle("menu");
});


// Small screen menu
const dropBtn1Small = document.getElementById("droppingBtn1__small");
const dropdown1Small = document.getElementById("dropdown1__small");
const dropIco1Small = document.getElementById("dropIco1__small");

dropBtn1Small.addEventListener("click", function(){
  if (dropdown1Small.classList.contains("hide")){
    dropdown1Small.classList.add("showDrop1__small");
    dropdown1Small.classList.remove("hide");
    dropIco1Small.style.backgroundImage = "url('images/icon-arrow-up.svg')";
  } else {
    dropdown1Small.classList.remove("showDrop1__small");
    dropdown1Small.classList.add("hide");
    dropIco1Small.style.backgroundImage = "url('images/icon-arrow-down.svg')";
  }
});

const dropBtn2Small = document.getElementById("droppingBtn2__small");
const dropdown2Small = document.getElementById("dropdown2__small");
const dropIco2Small = document.getElementById("dropIco2__small");

dropBtn2Small.addEventListener("click", function(){
  if (dropdown2Small.classList.contains("hide")){
    dropdown2Small.classList.add("showDrop2__small");
    dropdown2Small.classList.remove("hide");
    dropIco2Small.style.backgroundImage = "url('images/icon-arrow-up.svg')";
  } else {
    dropdown2Small.classList.remove("showDrop2__small");
    dropdown2Small.classList.add("hide");
    dropIco2Small.style.backgroundImage = "url('images/icon-arrow-down.svg')";
  }
});
