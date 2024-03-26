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


  document.getElementById("contratante").style.backgroundColor = "#3d3b3b"

  document.getElementById("pedreiro").style.backgroundColor = "#F29D30"

  document.getElementById("fundo-main").style.backgroundImage = "url(img/home-pedreiro3.jfif)"

  document.getElementById("login-home").style.borderColor = "#F29D30"

  document.getElementById("senha-login").style.borderColor = "#F29D30"

  document.getElementById("cpf-login").style.borderColor = "#F29D30"

  document.getElementById("botao-entrar-login").style.backgroundColor = "#F29D30"
  
}

function escolherContratante(){

  let formContratante = ""

  document.getElementById("pedreiro").style.backgroundColor = "#3d3b3b"

  document.getElementById("contratante").style.backgroundColor = "#0CA4F2"

  document.getElementById("fundo-main").style.backgroundImage = "url(img/home-contratante-1.png)"

  document.getElementById("login-home").style.borderColor = "#0CA4F2"

  document.getElementById("senha-login").style.borderColor = "#0CA4F2"

  document.getElementById("cpf-login").style.borderColor = "#0CA4F2"

  document.getElementById("botao-entrar-login").style.backgroundColor = "#0CA4F2"


formContratante += ''

}
  function openForm() {
    document.getElementById("myForm").style.display = "block";
    document.querySelector("main").style.marginTop="0";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.querySelector("main").style.marginTop="60px"
  }

  // --------------------------validar
const cpfLogin = document.getElementById("cpf-login")

cpfLogin.addEventListener("keypress", function(){

  let cpfFormatado = cpfLogin.value.length

  if (cpfLogin === String){
    cpfLogin = "";
  }

  if (cpfFormatado === 3 || cpfFormatado === 7){
    cpfLogin.value += ".";
  } else if (cpfFormatado === 11){
    cpfLogin.value += "-";
  }

})