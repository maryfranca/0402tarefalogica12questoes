
//8. Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital 
//inicial,  tempo em meses e taxa de juros mensal, fornecidos pelo usuário. 
//Use a fórmula: M = C * (1+i)t 
//Onde: 
//▪ C = Capital inicial investido 
//▪ i = Taxa de juros, em percentual 
//▪ t = Tempo do investimento, em meses 
//Exiba o resultado com duas casas decimais. 

function investimentoMontante(){
    var capital = parseFloat(prompt + "Digite o seu capital")
    var juros = parseFloat(prompt + "Digite o seu juros")
    var tempo = parseFloat(prompt + "Digite o tempo em meses")
    var total = capital * (1+juros)*tempo;
    window.alert(total.toFixed(2));
}
investimentoMontante()
