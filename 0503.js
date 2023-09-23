//Escreva uma função em JavaScript que realize a conversão de uma temperatura fornecida em graus Fahrenheit (F)
//para Celsius (C). Dica: para converter uma temperatura em F para C, subtraia 32 da temperatura e 
//multiplique o resultado por 0,5556 (ou  5/9). 

function temperatura() {
    var F = 180;
    var C = (F-32)*5/9;
    console.log (C);
}
temperatura()