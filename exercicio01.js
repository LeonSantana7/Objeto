// Declarar uma variavel que armazena um objeto com as seguintes propriedades:
// Idade, Altura, temCNH, Apelidos 
// Imprima na tela:
// "José tem 30 anos, 1.73cm de altura, possui CNH e os seguintes apelidos: Jr, Juninho"

const pessoa = {
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ['Jr','Juninho'],
}

const textoCNH = pessoa.temCNH ? "Possui CNH" : "Não possui CNH";

console.log(`José tem ${pessoa.idade} anos, ${pessoa.altura}cm de altura,${textoCNH} 
e os seguintes apelidos: `)
for (let apelido of pessoa.apelidos) {
    console.log(` -${apelido}`);
}