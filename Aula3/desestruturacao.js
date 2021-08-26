let cores = ['branco', 'celeste', 'amarelo', 'azul'];

let corBranco = cores[0];
let corAzul = cores[3];
let corAmarelo = cores[2];

console.log(corBranco);
console.log('')
// object literal e array
let pessoa = {
    nome: 'alexandre',
    altura: 1.7,
    idade: 30
}

const {nome, idade} = pessoa;

console.log(nome);
console.log('')

let lista = ['pão', 'leite', 'café'];

const [item1, item2, item3 ] = lista;

console.log(item3)
console.log('')

let carro = { marca: 'VW', ano: 2000};
let marcaCarro = carro.marca;

console.log(marcaCarro);