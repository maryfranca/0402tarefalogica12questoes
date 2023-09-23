//não consegui - copiei na internet
//. Crie uma função que recebe um array de 2 números 
//e coloque eles em ordem crescente. Utilize o laço for e método  sort. 

var numeros = []; //transformar string em array

for (var i = 0; i < 2; i++) {
  var numero = parseInt(prompt("Digite um número:"));
  numeros.push(numero); //push = empurrar, eu empurro a minha string que é texto para array
}

numeros.sort(function(a, b) { //comparacao
  return a - b;
});

window.alert("Números em ordem crescente: " + numeros);