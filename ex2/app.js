/********************************************************
Objetivo - Realizar tabuada com valores iniciais e valores finais |
Data- 13/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
*********************************************************/


var tabuada = require("./models/tabuada")
var readLine = require("readline");

//Criando a entrada de dados para chamar a função CallBack
var dataInput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

dataInput.question("Digite a multiplicando inicial: ", function(numeroIncial){
    let inicio = Number(numeroIncial);

    dataInput.question("Digite o multiplicando final: ", function(numeroFinal){
        let fim = Number(numeroFinal);

        dataInput.question("Digite o primeiro multiplicador: ", function(multiplicadorInicial){
            let primeiroMultiplicador = Number(multiplicadorInicial);

            dataInput.question("Digite o último multiplicador: ", function(multiplicadorFinal){
                let ultimoMultiplicador = Number(multiplicadorFinal);

                if(inicio == '' || fim == '' || primeiroMultiplicador == '' || ultimoMultiplicador == ''){
                    console.log('ERROR: As entradas aparecem vazias, necessitam de um preenchimento!')
                    dataInput.close();
                }else if(inicio < 2 || fim > 100){
                    console.log("ERROR: As entradas não estão de acordo com nosso sistema")
                    dataInput.close()
                }else if(primeiroMultiplicador < 1 || ultimoMultiplicador > 50){
                    console.log("ERROR: As entradas não estão de acordo com nosso sistema")
                    dataInput.close();
                }else{
                    verificaTabuada = Number(tabuada.calculandoTabuada(inicio, fim, primeiroMultiplicador, ultimoMultiplicador));
                    dataInput.close();
                }
            })
        })
    })
})