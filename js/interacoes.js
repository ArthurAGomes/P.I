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

// Abrir menu mobile

let meuMenu = document.getElementById("menu-hamburguer")
var menuLat = document.getElementById("menuLateral")

function abrirNav(){

  meuMenu.classList.toggle("change");
  menuLat.classList.toggle("abrir");
  // .toggle.style.width="250px";
}

// acordeon sobre nos
var aco= document.getElementsByClassName("vejaMais");
var o;
for (o = 0; o < aco.length; o++){
 
  aco[0].addEventListener("click", function() {
    this.classList.toggle("active");
    var descer = this.nextElementSibling;
    if (descer.style.display === "block") {
      descer.style.display = "none";
    } else {
      descer.style.display = "block";
    }
  });
}
// accordeon Pag Duvidas
var acc = document.getElementsByClassName("accordionDuvidas");
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

// Escolher Pedreiro ou Contratante

function escolherPedreiro(){

  

  document.getElementById("contratante").style.backgroundColor = "#ccc"

  document.getElementById("pedreiro").style.backgroundColor = "#F29D30"

  document.getElementById("menu-principal").style.backgroundColor = "#F29D30"

  document.getElementById("fundo-main").style.backgroundImage = "url(../img/home-pedreiro3.jfif)"
  
}

function escolherContratante(){
  document.getElementById("pedreiro").style.backgroundColor = "#ccc"

  document.getElementById("contratante").style.backgroundColor = "#0CA4F2"

  document.getElementById("menu-principal").style.backgroundColor = "#0CA4F2"

  document.getElementById("fundo-main").style.backgroundImage = url("../img/home-contratante-1.png")

}