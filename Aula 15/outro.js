var produto1 = {
  nome: "Coca Cola",
  categoria: "Bebidas",
  quantidades: 30,
  tamanho: ["200ml", "Lata", "600ml", "2L"],
  // Criação de um metodo interno
  descricao: function () {
    // Uso de this como referencial
    console.log("O produto", this.nome, "é da categoria", this.categoria);
  },
  verTamanhos: opcoes,
};

var produto2 = {
  nome: "Salgado",
  categoria: "Comida",
  quantidades: 10,
  tamanho: ["Pequeno", "Médio", "Grande", "Extra Grande"],
  descricao: function () {
    console.log("O produto", this.nome, "é da categoria", this.categoria);
  },
  verTamanhos: opcoes,
};

// produto1.descricao();
// produto2.descricao();

function opcoes() {
  // let tmhs = ""
  // for(var i in this.tamanho){
  //     tmhs += this.tamanho[i] + ","
  // }
  // console.log("As opções são: ",tmhs)
  console.log("As opções são: ", this.tamanho.toString());
}

produto1.descricao();
produto1.verTamanhos();

produto2.descricao();
produto2.verTamanhos();

// Crie um terceiro produto, pedindo as informçãoes do mesmo
// para o usuário através do prompt
var produto3 = {
  nome: prompt("nome: "),
  categoria: prompt("categoria: "),
  quantidades:prompt("quantidades: "),
  tamanho: prompt("tamanhos: (separados por virgula)").split(","),
  descricao: function () {
    console.log("O produto", this.nome, "é da categoria", this.categoria);
  },
  verTamanhos: opcoes,
};

produto3.descricao();
produto3.verTamanhos();