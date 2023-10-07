const pessoa = {
    nome: "Leon",
    idade: 25,
    altura: 1.80,
}
console.log(`Oi meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e ${pessoa.altura} de altura`);

pessoa['nome'] = "Gabriel";
pessoa['idade'] = 50;
pessoa['altura'] = 1.70;

console.log(`Oi meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e ${pessoa.altura} de altura`);