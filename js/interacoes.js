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


  document.getElementById("senha-login").style.borderColor = "#0CA4F2"

  document.getElementById("cpf-login").style.borderColor = "#0CA4F2"

  document.getElementById("botao-entrar-login").style.backgroundColor = "#0CA4F2"

  linkCad.setAttribute("href", "cadastroco.html");
  
}

// Mudar tema Home

function mudarTemaP(){
  document.getElementById("fundo-main").style.backgroundImage = "url(img/home-pedreiro3.jfif)"
  document.getElementById("fundo-main").style.justifyContent = "right"
  document.getElementById("buscar-pedreiro").style.display = "none"

  document.getElementById("conteudo-mapa").style.display = "none"

}

function mudarTemaC(){
  document.getElementById("fundo-main").style.backgroundImage = "url(img/home-contratante-1.png)"

  document.getElementById("conteudo-mapa").style.display = "block"
  
  let campoCep = document.getElementById("buscar-pedreiro")
  
  let aux = ""

  aux += `<div>
            <form action="#">
              <input placeholder="Informe seu CEP" type="text" maxlength="14">
              <button>Buscar Pedreiro</button>
            </form>
          </div>`;
  campoCep.style.display = "block"
  campoCep.innerHTML = aux;

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
  var checkbox = document.getElementById('pf');

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

  cpf.value = cpf.value.replace(/[a-zA-Z]/g, '');
}

document.getElementById('pf').addEventListener('change', limparCampoCPF);
document.getElementById('pj').addEventListener('change', limparCampoCPF);

function limparCampoCPF() {
  document.getElementById('cpf').value = '';
}


function mascara_cep(event) {
  var cep = document.getElementById('cep');

  if (cep.value.length == 5) {
      cep.value += "-";
  }

  cep.value = cep.value.replace(/[a-zA-Z]/g, '');
}

const form = document.getElementById('formco');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // console.log('ffff');

  validarNome();
  validarSenha();
  compareSenha();
  validarcpf();
})



function setError(index) {
  campos[index].style.border = '1px solid #e63636';
  span[index].style.display = 'block';
}

function removeError(index) {
  campos[index].style.border = '';
  span[index].style.display = 'none';
}



function validarNome() {
  if (campos[0].value.length < 3) {

      setError(0);

  } else {
      removeError(0)
  }
}

function validarSenha() {
  if (campos[1].value.length < 8) {

      setError(1);

  } else {
      removeError(1)
      compareSenha()
  }

}

function compareSenha() {
  if (campos[1].value == campos[2].value && campos[2].value.length >= 8) {

      removeError(2)

  } else {

      setError(2);
  }
}

function validarcpf() {
  if (campos[3].value.length < 14) {

      setError(3);

  } else {
      removeError(3)
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