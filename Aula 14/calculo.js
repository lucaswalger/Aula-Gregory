// Criando os arrays

var alunos = []
var notasA = []
var notasB = []

// Função pra cadastro
function cadastro(){
    for(var i = 0; i < 3; i++){
       alunos[i] = prompt("Digite um nome: ")
       notasA[i] = prompt("Digite a primeira nota: ")
       notasB[i] = prompt("Digite a segunda nota: ")
    }
}

// Função para calcular media
function calcularMedia(nota1, nota2){
    let mediaFinal = ((nota1 * 0.4) + (nota2 * 0.6))
    return mediaFinal
}

// Verificar Situação
function situacao(media){
     if(media >= 7){
        return "Aprovado"
     }
     else if(media >= 5){
        return"Em recuperação"
     }
     else{
        return "Reprovado"
     }
}

// Mostrar o resultado
function mostrarResultados(){
    for(var i in alunos){
    let notaPri = notasA[i]
    let notaSeg = notasB[i]
    let mediaAtual = calcularMedia(notaPri, notaSeg)
    // let mediaAtual = calcularMedia(notaA[i], notaB[i])
    let situacaoAtual = situacao(mediaAtual)

    console.log("O aluno: ",alunos[i], "teve média de: ",mediaAtual,".");
    console.log("Sua situação então é: ",situacaoAtual);
    }
}

cadastro()
mostrarResultados()

console.log(alunos);
console.log(notasA);
console.log(notasB);