var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
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

function abrirNav() {

  meuMenu.classList.toggle("change");
  menuLat.classList.toggle("abrir");
  
}

// acordeon sobre nos
var aco = document.getElementsByClassName("vejaMais");
var o;
for (o = 0; o < aco.length; o++) {

  aco[0].addEventListener("click", function () {
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
  acc[i].addEventListener("click", function () {
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

let linkCad = document.getElementById("link-cadastro")

function escolherPedreiro() {


  document.getElementById("contratante").style.backgroundColor = "#3d3b3b"

  document.getElementById("pedreiro").style.backgroundColor = "#F29D30"

  // document.getElementById("fundo-main").style.backgroundImage = "url(img/home-pedreiro3.jfif)"

  // document.getElementById("login-home").style.borderColor = "#F29D30"

  document.getElementById("senha-login").style.borderColor = "#F29D30"

  document.getElementById("cpf-login").style.borderColor = "#F29D30"

  document.getElementById("botao-entrar-login").style.backgroundColor = "#F29D30"

  linkCad.setAttribute("href", "cadastrope.html");

}

function escolherContratante() {

  // let formContratante = ""

  document.getElementById("pedreiro").style.backgroundColor = "#3d3b3b"

  document.getElementById("contratante").style.backgroundColor = "#0CA4F2"

  // document.getElementById("fundo-main").style.backgroundImage = "url(img/home-contratante-1.png)"

  // document.getElementById("login-home").style.borderColor = "#0CA4F2"

  document.getElementById("senha-login").style.borderColor = "#0CA4F2"

  document.getElementById("cpf-login").style.borderColor = "#0CA4F2"

  document.getElementById("botao-entrar-login").style.backgroundColor = "#0CA4F2"

  linkCad.setAttribute("href", "cadastroco.html");
  


  // formContratante += ''

}
//POPUP--Minha conta---
function openForm() {
  const popUpLogin = document.getElementById("popUpLogin");
  popUpLogin.classList.add("open");
}

function closePopup() {
  const popUpLogin = document.getElementById("popUpLogin");
  popUpLogin.classList.remove("open");
  
}


// --------------------------validar
// const cpfLogin = document.getElementById("cpf-login")

// cpfLogin.addEventListener("keypress", function (){

//   let cpfFormatado = cpfLogin.value.length

  // if (cpfLogin === String) {
  //   cpfLogin = "";
  // }

//   if (cpfFormatado === 3 || cpfFormatado === 7) {
//     cpfLogin.value += ".";
//   } else if (cpfFormatado === 11) {
//     cpfLogin.value += "-";
//   }

// })

//-------------cadastro contratante-------------------------
function mascara_cpf(event) {
  var cpf = document.getElementById('cpf');
  var pessoaFisica = document.getElementById('pf')
  var pessoaJuridica = document.getElementById('pj')

  if (pessoaFisica.checked) {
    cpf.setAttribute("maxlength", "14")
    if (cpf.value.length == 3 || cpf.value.length == 7) {
      cpf.value += ".";
    } else if (cpf.value.length == 11) {
      cpf.value += "-";

    }
  } else if (pessoaJuridica.checked) {
    cpf.setAttribute("maxlength", "18")
    if (cpf.value.length == 2 || cpf.value.length == 6) {
      cpf.value += ".";
    } else if (cpf.value.length == 10) {
      cpf.value += "/";
    } else if (cpf.value.length == 15) {
      cpf.value += "-";
    }

  }

}

function mascara_cep(event) {
  var cep = document.getElementById('cep');

  if (cep.value.length == 5) {
    cep.value += "-";
  }
}



$('#cep').blur(function () {
  var lc = $(this).val();
  $.get('https://viacep.com.br/ws/' + lc + '/json/', function (regiao) {
    $('#cidade').val(regiao.localidade);
    $('#rua').val(regiao.logradouro);
    $('#bairro').val(regiao.bairro);
    $('#estado').val(regiao.uf);
  });
});
