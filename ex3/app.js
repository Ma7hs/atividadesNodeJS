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
    if(numeroInicial > 500 || numeroInicial < 0){
        console.log('ERROR: Digite um número que seja entre 0 e 500')
        dataInput.close();
    }else{
        dataInput.question('Insira o número final: ', function(numero2){
            numeroFinal = Number(numero2);
            if(numeroFinal > 100 || numeroFinal < 1000){
                console.log('ERROR: Digite um número que seja entre 100 a 1000')
                dataInput.close();
            }else if(numeroInicial == numeroFinal){
                console.log('ERROR: As entradas não pode ser iguais!')
                dataInput.close();
            }else if(numeroInicial == '' || numeroFinal == ''){
                console.log('ERROR: As entradas não podem estar vazias')
                dataInput.close();
            }else{
                dataInput.question('Escolha entre PAR ou IMPAR: ', function(decisao){
                    escolha = String(decisao.toUpperCase());
        
                    tabuada = verificaTabuada.verificaImparPar(Number(numeroInicial), Number(numeroFinal), escolha)
                    dataInput.close();
                })  
            }
        })
    }    
})