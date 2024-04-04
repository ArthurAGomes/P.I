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
 
//   form.addEventListener('submit', (event) => {
//     event.preventDefault();
 
//     // console.log('ffff');
 
//     validarNome();
//     validarSenha();
//     compareSenha();
//     validarcpf();
//   })
 
 
 
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
