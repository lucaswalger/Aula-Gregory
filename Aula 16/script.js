// Console - Terminal de navegador
// console.log(console);

// Window - Janela do navegador
// window.alert("OOhhh Man!!! islacidi")
// alert("Dauana Jonso")

// Document = DOM ou seu código HTML inteiro
console.log(document);
console.log(document.head);
console.log(document.body);

// Acessar elementos do body

// Pega elementos pala tag
var titulos = document.getElementsByTagName("h1");

console.log(titulos);

var paragrafos = document.getElementsByClassName("para");
console.log(paragrafos);

// Pega elementos pelo id
var especifico = document.getElementById("p3");
console.log(especifico);

// Modificando popriedades de algum elemento

// Pego por id
especifico.style.backgroundColor = "green";
especifico.style.color = "yellow";

// Pego por class
paragrafos[0].style.backgroundColor = "pink";
paragrafos[0].style.color = "orange";

// Pego po tag
titulos[2].style.backgroundColor = "gray";
titulos[2].style.color = "white";

function cliquei() {
  console.log("EU FALEI PARA VOCÊ SAIR DAQUI TAPURU DE ESGOTO!!!!!");
}

// Crie um botão, que altere todos os títulos para verde e aumente a fone para 100px
function mudar() {
  for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.backgroundColor = "green";
    titulos[i].style.color = "white";
    titulos[i].style.fontSize = "100px";
  }
}

function quemFoi(elementoQueChamou) {
  console.log(elemento);
}

function troca(elementoQueChamou) {
  // console.log.apply(elementoQueChamou);

  let textoNovo = elementoQueChamou.value;
  let textoAntigo = document.getElementById("textoTrocar");

  textoAntigo.innerText = textoNovo;

  console.log(textoNovo);
}

function trocaAgora(elementoDigi) {
  // console.log.apply(elementoQueChamou);

  let textoNovo = elementoDigi.value;
  let textoAntigo = document.getElementById("textoTrocaAgora");

  textoAntigo.innerText = textoNovo;

  console.log(textoNovo);
}

function viraVerde(elemento) {
  elemento.style.color = "green";
  elemento.style.fontSize = "200px";
}

function viraAzul(elemento) {
  elemento.style.color = "blue";
  elemento.style.fontSize = "10px";
}
