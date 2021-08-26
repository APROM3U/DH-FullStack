// for-in
let carro = {
    nome: 'Jose',
    ano: 2001
}

for (let prop in carro){
    console.log(prop, carro[prop]);
}

// for-of
let series = ['Friends', 'GoT', 'Breaking Bad'];

for(let valor of series){
    console.log(valor);
}