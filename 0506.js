//const nomes = ['tom', 'alex', 'bob'];
//nomes.reverse(); // retorna ["bob", "alex", "tom"]
//método toString() para converter o número em uma string antes de aplicar 
//o método split(""), reverse() e join("") para inverter a string.
//pegado na internet

function mostrarNumeroInvertido() {
  var numero = prompt("Digite um número:");
  var numeroInvertido = numero.split("").reverse().join("");

  console.log("Número invertido: " + numeroInvertido);
}

// Exemplo de uso da função:
//
mostrarNumeroInvertido();


