/********************************************************
Objetivo - Realizar calcúlo de médias entre alunos
Data- 10/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
*********************************************************/

const verificaImparPar = function (numero1, numero2, decisao) {
    let numeroInicial = Number(numero1);
    let numeroFinal = Number(numero2);
    let escolha = decisao.toUpperCase();

    //start do looping com pares
    let contadorPares = 0

    //start do looping com impares
    let contadorImpar = 0

    if (numeroInicial <= numeroFinal) {
        if (escolha === 'PAR') {
            while (numeroInicial <= numeroFinal) {
                if (numeroInicial % 2 == 0) {
                    console.log(numeroInicial)
                    contadorPares += 1;
                }
                numeroInicial += 1
            }
            console.log(`A quantidade de numeros encontrados foram: ${contadorPares} `)

        }else if (escolha === 'IMPAR') {
            while(numeroInicial <= numeroFinal){
                if(numeroInicial % 2 != 0){
                    console.log(numeroInicial)
                    contadorImpar += 1;
                }
                numeroInicial+=1;
            }
            console.log(`A quantidade de numeros encontrados forma: ${contadorImpar}`)
        }   
    } else {
        console.log('Os numeros foram inseridos de maneira incorreta!')
    }
}




module.exports = {
    verificaImparPar
}