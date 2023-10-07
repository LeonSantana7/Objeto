// Cartão de consumo com : Nome, idade, produtos
// Cada produto pode ter : Nome, preço unitario, quantidade

const cartao = {
    nomeCliente: "Carlos",
    idade: 30,
    produtos: [{
            nome: "Aguá",
            preco: 2,
            quantidade: 1,
        },
        {
            nome: "Picolé",
            preco: 1.50,
            quantidade: 1,
        },
        {
            nome: "Refrigerante",
            preco: 5,
            quantidade: 1,
        }]
}

//imprimir o nome do cliente
//imprimir a idade do cliente
//modifique a idade do cliente
//imprima a nova idade do cliente
//imprima o nome do primeiro produto consumido
// imprima o preço unitario do ultimo produto consumido por ele
console.log(`Nome do Cliente: ${cartao.nomeCliente}
Idade do Cliente: ${cartao.idade}`);
idade = 25;
console.log(`Nova idade do Cliente: ${idade}
Primeiro produto consumido: ${cartao.produtos[0].nome}
Preço unitario do ultimo produto consumido: ${cartao.produtos[2].preco}`);
