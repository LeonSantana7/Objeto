// Desestruturação de objetos - Destructuring
// Quebra o objeto

const pessoa = {
    nome: "José",
    idade: 20,
    cidade: "Salvador",
    profissão: "Dev",
};

//const nome = pessoa.nome;
//const idade = pessoa.idade;

const {nome, idade, ...outros} = pessoa; // Desestruturação

console.log(nome, idade);
console.log(outros);