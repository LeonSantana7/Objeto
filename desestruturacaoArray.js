const array = [1, 2, 3, 4, 5, 6];

//const a = array[0];
//const b = array[1];

const [a, b, ...resto] = array; // Desestruturação

console.log(a, b);
console.log(resto)