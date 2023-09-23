//7. Escreva uma função em JavaScript que conte quantas vezes um caractere
 //aparece em uma string. Tanto o caractere  quanto a string devem ser fornecidos pelo usuário. 

 var palavra = prompt("Digite a palavra:");

 function contarLetras() {
   var quantidadeLetras = palavra.length;
   return quantidadeLetras; //retornar quando for chamada
 }
 contarLetras()
 
 var quantidade = contarLetras();
 window.alert("Quantidade de letras: " + quantidade);
 
