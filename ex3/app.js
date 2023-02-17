/********************************************************
Objetivo - Realizar calcúlo de médias entre alunos
Data- 10/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
*********************************************************/

var verificaTabuada = require("./models/verificate")
var readLine = require("readline");

//Criando a entrada de dados para chamar a função CallBack
var dataInput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("BEM VINDO A VERIFICADOR DE NUMEROS")

dataInput.question('Insira o número inicial: ', function(numero1){
    numeroInicial = Number(numero1);

    dataInput.question('Insira o número final: ', function(numero2){
        numeroFinal = Number(numero2);

        dataInput.question('Escolha entre PAR ou IMPAR: ', function(decisao){
            escolha = String(decisao.toUpperCase());

            tabuada = verificaTabuada.verificaImparPar(Number(numeroInicial), Number(numeroFinal), escolha)
            dataInput.close();
        })  
    })
})