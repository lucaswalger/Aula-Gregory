// //  Mostra uma mensagem no console
// console.log("Quale rapaziada!!!");

// //  Console de Alerta
// //   alert("Testando aqui para ver se vai")

// var nome = "Zé Lele";
// var numero = 85;
// var pulo = 9.4;
// var theBest = true;

// console.log("Zé Lele");
// console.log("85");
// console.log("9.4");
// console.log("true");

// console.log(typeof pulo);

// console.log(typeof nulo);
// console.log(typeof infedinido);

// // OPERADORES ARITMETICOS
// // +,-,*,/,%

// var a = 10,
//   b = 5;

// console.log("Soma: ", a + b);
// console.log("Subtração: ", a - b);
// console.log("Multiplicação: ", a * b);
// console.log("Divisão: ", a / b);
// console.log("Módulo: ", a % b);

// // OPERADORES LÓGICOS
// // E , OU ,NÃO
// // && ,|| , !

// var verdade = true;
// var mentira = false;

// console.log(verdade && mentira);

// console.log(verdade || mentira);

// console.log(verdade && !mentira);

// console.log("FIM");

// //OPERADORES RELACIONAIS
// // >, <, >=, <=, ==, !=, ===, !==

// var x = 65, y = 32, z = "65"

// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);
// console.log(x == y);
// console.log(x != y);

// console.log(x === z);
// console.log(x !== z);

// // INTERAÇÃO COM O USUÁRIO

// var time = prompt("Digite seu clube de coração: ")

// console.log("Seu time é o: ",time);

// DESVIOS CONDICIONAIS
// IF = SE
var estaVivo = true;

if (estaVivo == true) {
  console.log("Você está vivo");
} else if (estaVivo == false) {
  console.log("Estás muerto ☠️");
} else {
  console.log("Você é uma mumia");
}

//SWICH = ESCOLHA
var camisa = prompt("Qual a cor da sua camisa: ");

switch (camisa) {
  case "Azul":
    console.log("Ganhou um vouncher");
    break;

  case "Branco":
    console.log("Ganhou um playstation");
    break;

  case "Vermelho":
    console.log("Ganhou uma Ferrari");
    break;

  default:
    console.log("Camisa inválida");
    break;
}

//LAÇOS DE REPETIÇÃO = LOOPS
// FOR = PARA

for (var i = 0; i < 5; i++) {
  console.log("Estoy aquí");
}
console.log("Acabou hahahahhahahah");

//WHILE = ENQUANTO

var c = 1

while(c < 10){
      console.log("Entrei em um loop");
      c++
}

//FUNÇÕES 
//SÓ EXECUÇÕES
function teste(){
    console.log("NÃO É A MAMÃE");
}

teste()

//COM PARÂMETROS
function teste2(parametro){
    console.log("O parametro é: ",parametro);
}

teste2("pão de batata")

//COM RETORNO
function brisadeiro(n1, n2){
    let  resultado = n1 + n2
    return resultado
}

var final = brisadeiro(24,30)

 console.log("Quantidades de brisadeiros fabricados: ",final);
