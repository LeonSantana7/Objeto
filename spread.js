// Spread (...) -> Espalhar
// Ele espalha o conteúdo de um array ou objeto

const pessoa = {
    nome: "José",
    idade: 20,
    cidade: "Salvador",
    profissao: "Dev",
}

const endereco = {
    rua: "Aqui",
    numero: "32",
    bairro: "Bairro legal",
}

// Usando o spread
const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20,
};

console.log(objetoFundido);