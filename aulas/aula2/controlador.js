const readline = require("readline-sync");

const produtos = [];

function criar() {
  const nome = readline.question("Informe o nome do produto: ");
  const preco = readline.question("Informe o preco do produto: ");
  const novo = { nome, preco }; //new Object(nome, preco)
  produtos.push(novo);
}

function listar() {
  produtos.forEach((produto) => console.log(produto.nome, "-", produto.preco));
}

function buscar() {
  const nome = readline.question("Informe o nome do produto: ");
  const buscou = produtos.find((produto) => produto.nome === nome);
  if (buscou) {
    console.log(buscou.nome, "-", buscou.preco);
  } else {
    console.log("Produto não encontrado");
  }
}

function atualizar() {
  const nome = readline.question("Informe o nome do produto: ");
  const buscou = produtos.find((produto) => produto.nome === nome);
  if (buscou) {
    const outroNome = readline.question("Informe outro nome do produto");
    const outroPreco = readline.question("Informe outro preco do produto");
    buscou.nome = outroNome;
    buscou.preco = outroPreco;
  } else {
    console.log("Produto não encontrado");
  }
}
function remover() {
  const nome = readline.question("Informe o nome do produto: ");
  const posicao = produtos.findIndex((produto) => produto.nome === nome);
  if (posicao >= 0) {
    produtos.splice(posicao, 1);
  } else {
    console.log("Produto não encontrado");
  }
}

module.exports = { criar, listar, buscar, atualizar, remover };
