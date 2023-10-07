// Cartão de consumo com : Nome, idade, produtos
// Cada produto pode ter : Nome, preço unitario, quantidade

const cartao = {
    nomeCliente: "Carlos",
    idade: 30,
    produtos: [{
            nome: "Celular",
            preco: 500,
            quantidade: 1,
        },
        {
            nome: "Computador",
            preco: 1500,
            quantidade: 1,
        },
        {
            nome: "Tablet",
            preco: 200,
            quantidade: 1,
        }]
}

console.log(cartao)