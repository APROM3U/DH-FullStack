let listaFruta1 = ['Banana', 'Maça', 'Uva'];

let listaFruta2 = ['Pessego', 'Abacate', 'Jabuticaba', 'Uva'];

// Spreading
let todasFrutas = [...listaFruta1,...listaFruta2];

console.log(todasFrutas);

//--------------
console.log('')
let pessoa = {
    nome: 'Alexandre',
    idade: 30
}

let infoPessoa = {
    tel: '11961794033',
    rg: 111111,

    ...pessoa
}

let infoEndereco = {
    rua: 'Purus',

    ...infoPessoa
}

console.log(infoEndereco)

//--------------
//spread operator ganha parâmetros infinitos
console.log('')

function letras(...paramns){
    console.log(paramns);
}

letras(1, 'a', 3, 'C')

//--------------
console.log('')
let notas = [ 9.3, 8.5, 3.2, 7, 10];
console.log(Math.min(...notas));


//------ Parâmetros rest
console.log('')
function minha(param1, param2, ...outros){
    return outros;
}
console.log(minha(1,2,3,4,58));


function somar(...numeros){
    return numeros.reduce((acum, num) => acum += num);
}
console.log(somar(1,58));
