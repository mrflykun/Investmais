         // Fun��o sagrado
      function Slide1() {
            document.getElementById('slideid1').style.display = 'block';
            document.getElementById('slideid2').style.display = 'none';
            document.getElementById('slideid3').style.display = 'none';
            document.getElementById('slideid4').style.display = 'none';
        }

        function Slide2() {
            document.getElementById('slideid1').style.display = 'none';
            document.getElementById('slideid2').style.display = 'block';
            document.getElementById('slideid3').style.display = 'none';
            document.getElementById('slideid4').style.display = 'none';
        }

        function Slide3() {
            document.getElementById('slideid1').style.display = 'none';
            document.getElementById('slideid2').style.display = 'none';
            document.getElementById('slideid3').style.display = 'block';
            document.getElementById('slideid4').style.display = 'none';
        }
        function Slide4() {
            document.getElementById('slideid1').style.display = 'none';
            document.getElementById('slideid2').style.display = 'none';
            document.getElementById('slideid3').style.display = 'none';
            document.getElementById('slideid4').style.display = 'block';
        }

        document.getElementById('Slide1').addEventListener('click', Slide1);
        document.getElementById('Slide2').addEventListener('click', Slide2);
        document.getElementById('Slide3').addEventListener('click', Slide3);
        document.getElementById('Slide4').addEventListener('click', Slide4);


         function loadingpop() {
            document.getElementById("popup").style.display = "block";
             document.getElementById("overlay").style.display = "block";

             setTimeout(accept, 2000);

        }

function accept() {
    document.getElementById("enviadoconfirm").style.display = "block";
    document.getElementById("loader").style.display = "none";
    
    setTimeout(closePopup, 1000);
}
function closePopup() {
            document.getElementById("popup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }

                // Fun��o close alert
      function CloseAlert() {
            document.getElementById('alert').style.display = 'none';
        }




        // envio credito
      function adicionar5() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 5;
      inputNumero.value = novoValor;
    }

      function adicionar10() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 10;
      inputNumero.value = novoValor;
    }

      function adicionar20() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 20;
      inputNumero.value = novoValor;
    }

      function adicionar50() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 50;
      inputNumero.value = novoValor;
    }

      function adicionar100() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 100;
      inputNumero.value = novoValor;
    }


      function adicionar250() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 250;
      inputNumero.value = novoValor;
    }

          function adicionar500() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 500;
      inputNumero.value = novoValor;
    }

          function adicionar1000() {
      var inputNumero = document.getElementById('moneysend');
      var valorAtual = parseFloat(inputNumero.value);
      var novoValor = valorAtual + 1000;
      inputNumero.value = novoValor;
    }


    function atualizarNumero() {
      // Obt�m o elemento de input range
      var rangeInput = document.getElementById('rangeInput');

      // Obt�m o valor do input range
      var valorRange = rangeInput.value;

      // Define o valor do input number com o valor do input range
      document.getElementById('moneysend').value = valorRange;
    }

    function atualizarRange() {
      // Obt�m o elemento de input number
      var numeroInput = document.getElementById('moneysend');

      // Obt�m o valor do input number
      var valorNumero = numeroInput.value;

      // Verifica se o valor est� dentro do intervalo permitido (1 a 1000)
      if (valorNumero >= 1 && valorNumero <= 1000) {
        // Define o valor do input range com o valor do input number
        document.getElementById('rangeInput').value = valorNumero;
      } else {
        // Se estiver fora do intervalo, define um valor padr�o
        document.getElementById('moneysend').value = 1;
        document.getElementById('rangeInput').value = 1;
      }
}



// envio credito
function congelar5() {
    var inputNumero = document.getElementById('moneyice');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 5;
    inputNumero.value = novoValor;
}

function congelar10() {
    var inputNumero = document.getElementById('moneyice');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 10;
    inputNumero.value = novoValor;
}


function congelar50() {
    var inputNumero = document.getElementById('moneyice');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 50;
    inputNumero.value = novoValor;
}

function congelar100() {
    var inputNumero = document.getElementById('moneyice');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 100;
    inputNumero.value = novoValor;
}


function congelar500() {
    var inputNumero = document.getElementById('moneyice');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 500;
    inputNumero.value = novoValor;
}

function congelar1000() {
    var inputNumero = document.getElementById('moneyice');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 1000;
    inputNumero.value = novoValor;
}


function congelarNumero() {
    // Obt�m o elemento de input range
    var rangeInputice = document.getElementById('rangeInputice');

    // Obt�m o valor do input range
    var valorRangeice = rangeInputice.value;

    // Define o valor do input number com o valor do input range
    document.getElementById('moneyice').value = valorRangeice;
}

function atualizarcongelamentoRange() {
    // Obt�m o elemento de input number
    var numeroInputice = document.getElementById('moneyice');

    // Obt�m o valor do input number
    var valorNumeroice = numeroInputice.value;

    // Verifica se o valor est� dentro do intervalo permitido (1 a 1000)
    if (valorNumeroice >= 1 && valorNumeroice <= 1000) {
        // Define o valor do input range com o valor do input number
        document.getElementById('rangeInputice').value = valorNumeroice;
    } else {
        // Se estiver fora do intervalo, define um valor padr�o
        document.getElementById('moneyice').value = 1;
        document.getElementById('rangeInputice').value = 1;
    }
}


// deposito para credito
function deposit5() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 5;
    inputNumero.value = novoValor;
}

function deposit20() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 20;
    inputNumero.value = novoValor;
}


function deposit50() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 50;
    inputNumero.value = novoValor;
}

function deposit250() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 250;
    inputNumero.value = novoValor;
}


function deposit500() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 500;
    inputNumero.value = novoValor;
}

function deposit1000() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 1000;
    inputNumero.value = novoValor;
}


function deposit5000() {
    var inputNumero = document.getElementById('depositcred');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 5000;
    inputNumero.value = novoValor;
}


  // envio doacão
  function doar5() {
    var inputNumero = document.getElementById('doarnum');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 5;
    inputNumero.value = novoValor;
  }

    function doar20() {
    var inputNumero = document.getElementById('doarnum');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 20;
    inputNumero.value = novoValor;
  }

    function doar50() {
    var inputNumero = document.getElementById('doarnum');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 50;
    inputNumero.value = novoValor;
  }

    function doar100() {
    var inputNumero = document.getElementById('doarnum');
    var valorAtual = parseFloat(inputNumero.value);
    var novoValor = valorAtual + 100;
    inputNumero.value = novoValor;
  }

  function toggleContent(contentId) {
    document.getElementById('perfil').style.display = 'block';
    document.getElementById('config').style.display = 'none';
}

function perfilbtn() {
  document.getElementById('perfil').style.display = 'block';
  document.getElementById('config').style.display = 'none';
  document.getElementById('menuhome').style.display = 'none';
  
}

function configbtn() {
  document.getElementById('perfil').style.display = 'none';
  document.getElementById('config').style.display = 'block';
  document.getElementById('menuhome').style.display = 'none';
}

function backbtn() {
  document.getElementById('perfil').style.display = 'none';
  document.getElementById('config').style.display = 'none';
  document.getElementById('menuhome').style.display = 'block';
}

    // Aguarde o carregamento completo do documento
    $(document).ready(function () {
      // Selecione todas as divs com a classe "classList" e remova a classe "skeleton"
      $(".classList").removeClass("skeleton");
    });