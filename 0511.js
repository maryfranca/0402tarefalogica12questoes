//11. Escreva uma função que verifica se um número fornecido pelo usuário em um prompt é primo ou não. 
function verificarPrimo() {
    var numero = parseInt(prompt("Digite um número:"));
  
    if (numero <= 1) {
      console.log("O número não é primo.");
      return;
    }
  
    var ehPrimo = true;
  
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        ehPrimo = false;
        break;
      }
    }
  
    if (ehPrimo) {
      console.log("O número é primo.");
    } else {
      console.log("O número não é primo.");
    }
  }
  
  verificarPrimo();
  