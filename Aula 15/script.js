// Com array
var aluno = ["Pedro", "Thiago", "Barquinho"];
var media = [7, 8, 4];

console.log("O aluno ", aluno[0], "teve média de", media[2]);

// Criando um objeto
var aluno1 = {
//   chave: "Valor",
  nome: "Pedro",
  media: 7,
}

var aluno2 = {
    nome : "Thiago",
    media : 8,
}

// Acessa todo o objeto
console.log(aluno1);

// Acessa uma propriedade daquele objeto
console.log(aluno1.nome);
console.log(aluno2.media);

// Crie um objeto de escola, com 4 propriedades
var intervalo = {
    horaInicio : "20h20",
    horaFim : "20h30",
    duracao : "10min",
    local: "Pátio"
}

console.log("O intervalo inicia ás", intervalo.horaInicio,"e finaliza ás", intervalo.horaFim);

// Acessando um valor passando uma chave
console.log("Onde: ", intervalo["local"]);

// Criando um objeto vazio
var garrafa = {}

console.log(garrafa);

garrafa.cor = "Azul"
garrafa["marca"] = "Stanley"
garrafa.capacidade = "950ml"
garrafa.tipo = "Térmica"
garrafa.preco = 587

console.log(garrafa);

garrafa.cor = "Verde"
console.log(garrafa);

// Peça ao usuario uma nova propriedade e um novo valor 
// para ser adicionado na garrafa 
// var novaPopriedade = prompt("Qual seria a nova propriedade: ?")
// garrafa[novaPopriedade] = prompt("Digite o que esta dentro dessa nova propriedade: ")
// console.log(garrafa);
// console.log(garrafa.preco);

// Criar método

var animal1 = {
    nome : "Merlim",
    especie : "Canguru",
    raca : "perneta",
    andar : function(){
        console.log("pulando.....")
    },
    falar : function(){
        console.log("Vamos brigar maluco!!!!")
    }
}

console.log(animal1);
console.log(animal1.andar);
animal1.andar()
