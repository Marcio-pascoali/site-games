

/*Função prncipal*/
function calculo(operacao){
    /*Captura o conteudo dos imputs*/
    const n1 = parseFloat(document.getElementById('n1').value);
    const n2 = parseFloat(document.getElementById('n2').value);

    /*Verifica se o conteudo dos imputs são numeros validos*/
    if (isNaN(n1) || isNaN(n2)){
        document.getElementById('resultado').innerHTML = "Porfavos, Insira Números Validos!";
        return;
    }

    /*Realiza o calculo e imprime o resultado com base na opção escolida pelo usuario*/
    switch (operacao){
        case '+':
            document.getElementById('resultado').innerHTML = "O Resultado da Soma é "+(n1+n2);
            break;
        case '-':
            document.getElementById('resultado').innerHTML = "O Resultado da Subtração é "+(n1-n2);
            break;
        case '*':
            document.getElementById('resultado').innerHTML = "O Resultado da Multiplicação é "+(n1*n2);
            break;
        case '/':
            if (n2 == 0){
                document.getElementById('resultado').innerHTML = "Imposivel Dividir Por Zero!";
                break;
            }
            else {
                document.getElementById('resultado').innerHTML = "O Resultado da Divisão é "+(n1/n2);
                break;
            }
    }
}
/*Função para limpar os campos au clicar novamente no imput1 para digitar novos numeros*/
function limpa(){
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
    document.getElementById('resultado').innerHTML = "Aguardando Resultado..."
}
