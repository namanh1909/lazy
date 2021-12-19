
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
