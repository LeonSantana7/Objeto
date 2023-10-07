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

if(pessoa.temCNH === true){
    pessoa.temCNH = "possui CNH"
}else{
    pessoa.temCNH = "não possui CNH"
}

console.log(`José tem ${pessoa.idade} anos, ${pessoa.altura}cm de altura,${pessoa.temCNH} 
e os seguintes apelidos: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]}. `)