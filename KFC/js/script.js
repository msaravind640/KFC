// function openNav() {
//   document.getElementById("myNav").style.width = "100%";
// }

// function closeNav() {
//   document.getElementById("myNav").style.width = "0%";
// }

function myFunction() {
  var x = document.getElementById("myNav");
  if (x.style.width === "0%") {
    x.style.width = "100%";
    document.getElementsByClassName("content").style.display="none";
  } else {
    x.style.width = "0%";
  }
}