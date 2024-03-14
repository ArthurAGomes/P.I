var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
 

let meuMenu = document.getElementById("menu-hamburguer")
var menuLat = document.getElementById("menuLateral")

function abrirNav(){

  meuMenu.classList.toggle("change");
  menuLat.classList.toggle("abrir");
  // .toggle.style.width="250px";
}