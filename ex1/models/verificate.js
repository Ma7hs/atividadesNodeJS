const verificaNota = function (nota1, nota2, nota3, nota4) {

    let primeiraNota = Number(nota1);
    let segundaNota = Number(nota2);
    let terceiraNota = Number(nota3);
    let quartaNota = Number(nota4);
    let mediaNormal;
    

    mediaNormal = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota)) / 4;

    if (mediaNormal >= 70) {
        return mediaNormal 
    }else{
        return mediaNormal
    }
}

const verificaExame = (mediaNormal, exame) =>
    (Number(mediaNormal) + Number(exame)) / 2;


const verificaGeneroProfessor = function(generoProfessor){
    
    let status = true;
    
    let genero = generoProfessor
    if (genero == 'M'){
        return 'O professor'
    }else if(genero == 'F'){
        return 'A professora'
    }
}

const verificaGeneroAluno = function(generoAluno){

    let genero = generoAluno
    if(genero == 'M'){
        return 'O'
    }else if(genero = 'F'){
        return 'A'
    }else{
        console.log("ERRO: O genero ALUNO inserido é inválido dentro do nosso sistema")
    }
}

const verificaAprovacao = function(verificaAprovacao){
    let aprovadx = verificaAprovacao;

    if(verificaGeneroAluno == 'F'){
        return 'aprovada'
    }else if (verificaGeneroAluno == 'M'){
        return 'aprovado'
    }
}

module.exports = {
    verificaNota,
    verificaExame,
    verificaGeneroProfessor,
    verificaGeneroAluno,
    verificaAprovacao
}