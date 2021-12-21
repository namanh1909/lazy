
function Active() {
  var x = document.getElementById("input");
  var y = document.getElementById("menu");
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    y.style.marginLeft = "334.7px";
  } else {
    x.style.display = "none";
    y.style.marginLeft = "0px";
  }
}
function ActivePopup() {
  var z = document.getElementById("popup");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
function ActiveResgiterPopup() {
  var z = document.getElementById("popup2");
  if (z.style.display === "none") {
    z.style.display = "block";
  } else {
    z.style.display = "none";
  }
}
function UnActivePopup() {
  var z = document.getElementById("popup");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "none";
  }
}
function UnActiveResgiterPopup() {
  var z = document.getElementById("popup2");
  if (z.style.display === "none") {
    z.style.display = "none";
  } else {
    z.style.display = "none";
  }
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}