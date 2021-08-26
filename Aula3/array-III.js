// map
let numPar = [2,4,6,8,10];

let  numParDobro = numPar.map(function(valor){
    return valor * 2;
})

console.log('numeros * 2: ' + numParDobro);

// filter
let numFilter = numPar.filter(function(valor){
    return valor <= 6;
});

console.log('numeros filtrados: ' + numFilter);

// reduce
let somaPares = numPar.reduce(function(acum, valor){
    return acum + valor;
});

console.log('valorews somados: ' + somaPares);

// foreach
numPar.forEach(function(valor, indice){
    console.log('O indice ' + indice + ' tem o valor: ' + valor);
});