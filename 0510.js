//10. Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário.
//Por  exemplo, o usuário informa a string “Beterraba”, e a função retorna o número 4 (há 4 vogais nessa palavra). 
//function contarVogais(palavra) {
//codigo ajuda na internet
// acessar caracteres individuais em uma string com base em sua posição.
//codigo ajuda na internet

function contaVogais() {
    var palavra = prompt("Digite uma palavra:");
    var cont = 0;
    palavra = palavra.toLowerCase(); //converte string para caixa baixa pode ser alta tb
    //cada caracter tá dentro de um aray
    //a apalavra. legth é tipo transformar em letras, numero de caracteres que ela tem
    //vai ver cada caracter dentro da minha string 
    //charAt() é útil quando você precisa acessar caracteres individuais em uma string com base em sua posição.
    //palavra.charAt(i) é usada para obter o caractere em uma determinada posição i dentro da string palavra.
  
    for (var i = 0; i < palavra.length; i++) {
      if (palavra.charAt(i) === "a" || palavra.charAt(i) === "e" || palavra.charAt(i) === "i" || palavra.charAt(i) === "o" 
      || palavra.charAt(i) === "u") {
        cont++;
      }
    }
  
    console.log("A palavra digitada possui " + cont + " vogais.");
  }
  
  contaVogais();
  
      
