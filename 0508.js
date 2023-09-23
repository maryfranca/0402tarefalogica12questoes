
function investimentoMontante(){
    var capital = parseFloat(prompt + "Digite o seu capital")
    var juros = parseFloat(prompt + "Digite o seu juros")
    var tempo = parseFloat(prompt + "Digite o tempo em meses")
    var total = capital * (1+juros)*tempo;
    window.alert(total.toFixed(2));
}
investimentoMontante()
