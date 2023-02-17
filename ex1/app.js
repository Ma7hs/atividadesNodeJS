/********************************************************
Objetivo - Realizar calcúlo de médias entre alunos
Data- 10/02/2023
Autor - Matheus Siqueira Silva
Versão - 1.0
*********************************************************/
var verificaNota = require("./models/verificate");
var readLine = require("readline");

//Criando a entrada de dados para chamar a função CallBack
var dataInput = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

dataInput.question("Digite o nome do aluno: ", function (nomeAluno) {
    let aluno = nomeAluno;

    dataInput.question("Digite o nome do professor: ", function (nomeProfessor) {
        let professor = nomeProfessor;

        dataInput.question("Qual é o sexo do professor (F) ou (M)? ", function (sexoProfessor) {
            let sexoP = sexoProfessor;

            dataInput.question("Digite o sexo do aluno (F) ou (M)? ", function (sexoAluno) {
                let sexoA = sexoAluno;

                dataInput.question("Digite o nome do curso: ", function (nomeCurso) {
                    let curso = nomeCurso;

                    dataInput.question("Digite o nome da disciplina: ", function (nomeDisciplina) {
                        let disciplina = nomeDisciplina;
                        console.log('==============================================')

                        dataInput.question("Qual foi seu primeira nota? ", function (primeiraNota) {
                            let nota1 = Number(primeiraNota.replace(',','.'));

                            dataInput.question("Qual foi sua segunda nota? ", function (segundaNota) {
                                let nota2 = Number(segundaNota.replace(',','.'));

                                dataInput.question("Qual foi sua terceira nota? ", function (terceiraNota) {
                                    let nota3 = Number(terceiraNota.replace(',','.'));

                                    dataInput.question("Qual foi sua quarta nota? ", function (quartaNota) {
                                        let nota4 = Number(quartaNota.replace(',','.'));

                                            let generoAluno = verificaNota.verificaGeneroAluno(sexoA)
                                            let generoProfessor = verificaNota.verificaGeneroProfessor(sexoP)
                                            let verificaAprovacao = verificaNota.verificaAprovacao()

                                            if(isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
                                                console.log('ERROR: Insira apenas números dentro do nosso sistema!')
                                                dataInput.close();
                                            }else if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == ''){
                                                console.log('ERROR: Não coloque dados vazios dentro! Assim não irá funcionar!')
                                                dataInput.close();
                                            }
                                            else if(nota1 <= 100 && nota1 >= 0 || nota2 <= 100 && nota2 >= 0 || nota3 >= 100 && nota3 <= 0 || nota4 >= 100 && nota4 <= 0){

                                            let resultadoFinalSemExame = 0;
                                            resultadoFinalSemExame = verificaNota.verificaNota(nota1, nota2, nota3, nota4)
                                                

                                                if (resultadoFinalSemExame >= 70){
                                                    console.log(`\n ${generoAluno} ${aluno} foi ${verificaAprovacao} em ${disciplina} \n 
                                                    No curso: ${curso}\n 
                                                    ${generoProfessor}: ${professor} \n 
                                                    ${generoAluno} teve as seguintes notas: ${nota1}, ${nota2}, ${nota3}, ${nota4} \n
                                                    Media Final de: ${resultadoFinalSemExame} \n
                                                    Parabéns, você passou direto sem necessidade de exame!`);
                                                    dataInput.close();
                                                }else if(resultadoFinalSemExame >= 50 && resultadoFinalSemExame <= 69){
                                                    dataInput.question("Qual foi sua nota do exame? ", function(notaExame){

                                                        let exame = notaExame;
                                                        let resultadoExame;
                                                        resultadoExame = verificaNota.verificaExame(resultadoFinalSemExame, exame);
                                                            if (resultadoExame >= 60){
                                                                console.log(`\n ${generoAluno} ${aluno} foi ${verificaAprovacao} em ${disciplina} \n 
                                                                No curso: ${curso}\n 
                                                                ${generoProfessor}: ${professor} \n 
                                                                ${generoAluno} teve as seguintes notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${exame} \n
                                                                Media Final de: ${resultadoExame} \n
                                                                Parabéns, você passou com o exame`
                                                                )
                                                                dataInput.close();
                                                            }else{
                                                                console.log(`\n ${generoAluno} ${aluno} foi ${verificaAprovacao} em ${disciplina} \n 
                                                                No curso: ${curso}\n 
                                                                ${generoProfessor}: ${professor} \n 
                                                                ${generoAluno} teve as seguintes notas: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${exame} \n
                                                                Media Final de: ${resultadoExame} \n
                                                                Infelizmente mesmo com o exame não conseguiu a aprovação`)
                                                                dataInput.close();
                                                            }
                                                    })
                                                }else{
                                                    console.log("Você foi reprovado sem direito a exame!")
                                                    dataInput.close();
                                                }
                                        }else{
                                            console.log('É necessário que digite uma nota entre 0 a 100')
                                            dataInput.close();
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})