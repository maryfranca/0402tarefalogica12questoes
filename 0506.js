//const nomes = ['tom', 'alex', 'bob'];
//nomes.reverse(); // retorna ["bob", "alex", "tom"]
//console.log(nomes)
//-------------------------------ERRADO-------------- Não consegui

const numeros = []; //pq vai colocar lá no parseflor

function numerosContagem() {
  for (let i = 0; i < 5; i++) {
    const numero = parseFloat(prompt("Digite um número"));
    numeros.push(numero);
  }
  
  window.alert(numeros);
  numeros.reverse();
  window.alert(numeros);
}

numerosContagem();


