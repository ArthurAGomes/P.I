function validateFormPe() {
  const nome = document.getElementById('nome');
  const senha = document.getElementById('password');
  const senha1 = document.getElementById('password1');
  const cpf = document.getElementById('cpf');
  
  let valid = true;

  if (!validateNomePe()) valid = false;
  if (!validateSenhaPe()) valid = false;
  if (!compareSenhaPe()) valid = false;
  if (!validateCpfPe()) valid = false;

  return valid;
}

function validateNomePe() {
  const nome = document.getElementById('nome');
  const spanRequired = nome.nextElementSibling;
  if (nome.value.length < 3) {
      spanRequired.style.display = 'block';
      return false;
  } else {
      spanRequired.style.display = 'none';
      return true;
  }
}

function validateSenhaPe() {
  const senha = document.getElementById('password');
  const spanRequired = senha.nextElementSibling;
  if (senha.value.length < 8) {
      spanRequired.style.display = 'block';
      return false;
  } else {
      spanRequired.style.display = 'none';
      return true;
  }
}

function compareSenhaPe() {
  const senha = document.getElementById('password');
  const senha1 = document.getElementById('password1');
  const spanRequired = senha1.nextElementSibling;
  if (senha.value !== senha1.value) {
      spanRequired.style.display = 'block';
      return false;
  } else {
      spanRequired.style.display = 'none';
      return true;
  }
}

function validateCpfPe() {
  const cpf = document.getElementById('cpf');
  const spanRequired = cpf.nextElementSibling;
  if (cpf.value.length !== 14 && cpf.value.length !== 18) {
      spanRequired.style.display = 'block';
      return false;
  } else {
      spanRequired.style.display = 'none';
      return true;
  }
}

function mascaraCpf(event) {
  var cpf = document.getElementById('cpf');
  var pessoaFisica = document.getElementById('pf');
  var pessoaJuridica = document.getElementById('pj');

  if (pessoaFisica.checked) {
      cpf.setAttribute("maxlength", "14");
      if (cpf.value.length == 3 || cpf.value.length == 7) {
          cpf.value += ".";
      } else if (cpf.value.length == 11) {
          cpf.value += "-";
      }
  } else if (pessoaJuridica.checked) {
      cpf.setAttribute("maxlength", "18");
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

function mascaraCep(event) {
  var cep = document.getElementById('cep');
  if (cep.value.length == 5) {
      cep.value += "-";
  }
  cep.value = cep.value.replace(/[a-zA-Z]/g, '');
}

const form = document.getElementById('formpe');
const campos = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');

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
      removeError(0);
  }
}

function validarSenha() {
  if (campos[1].value.length < 8) {
      setError(1);
  } else {
      removeError(1);
      compareSenha();
  }
}

function compareSenha() {
  if (campos[1].value == campos[2].value && campos[2].value.length >= 8) {
      removeError(2);
  } else {
      setError(2);
  }
}

function validarcpf() {
  if (campos[3].value.length < 14) {
      setError(3);
  } else {
      removeError(3);
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