function AdicionarNum(num) {
  document.getElementById("printNums").value += num;
}

function AdicionarOperacao(operador) {
  document.getElementById("printNums").value += operador;
}

function CalculaResultado(num, operador) {
  var expressao = document.getElementById("printNums").value;
  var resultado;

  try {
    resultado = eval(expressao);
    document.getElementById("printNums").value = resultado;
  } catch (error) {
    document.getElementById("printNums").value = "Erro!!";
  }
}

function LimparTextarea() {
  document.getElementById("printNums").value = "";
}
