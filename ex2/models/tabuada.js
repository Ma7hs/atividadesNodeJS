/********************************************************
Objetivo - Realizar função para realizar todo cálculo de tabuada
Data- 13/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
*********************************************************/

const calculandoTabuada = function (numero1, numero2, minMultiplicador, maxMultiplicador) {

    //Declarando quais serão as variáveis
    let multiplicandoInicial = numero1;
    let multiplicandoFinal = numero2;
    let inicioTabuada 
    let fimTabuada = maxMultiplicador;


    let resultadoTabuada
    
    //Enquanto nosso contadorTabuada for menor ou igual ao minMultiplicador, vai realizar o nosso looping
    while (multiplicandoInicial <= multiplicandoFinal) {
        console.log(`\nTabuada do numero: ${multiplicandoInicial}\n`)
        inicioTabuada = minMultiplicador; 
       
            while(inicioTabuada <= fimTabuada){
                resultadoTabuada = multiplicandoInicial * inicioTabuada
                console.log(`${multiplicandoInicial} x ${inicioTabuada} = ${resultadoTabuada}`);
                inicioTabuada += 1
        }
        multiplicandoInicial +=1;
    }
}


module.exports = { calculandoTabuada }