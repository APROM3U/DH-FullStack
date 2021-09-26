/* Callback função passada como argumento dentro de outra função */

// callbacks - função concatenar
function adicionarHttp(url) {
    return 'http://' + url;
}

// sites
const urls = ["www.google.com","www.yahoo.com"];

//função
function processar(urls, adicionarHttp){

    const lista = []
    
    for(let i = 0; i < urls.length; i++){
        lista.push(adicionarHttp(urls[i]));
    }

   return console.log(lista);
}

// chamada da função
processar(urls, adicionarHttp);

/*  .map() - Este método recebe uma função como parâmetros (callback).
    Percorre o array e retorna um novo array modificado
    Obs.: As modificações serão aquelas que nós programamos em nossa função de retorno do callback*/
let numPares = [2,4,6,8,10];

let dobro = numPares.map(function(valor){
    return valor*2;
})

console.log(dobro);

/*  .find() - Este método também recebe uma função como parâmetro. 
    O callback precisa retornar um booleano (true ou false), para que o find saiba que encontrou o elemento adequado.
    Retorna o valor do primeiro elemento do array buscado, caso não encontre nada, vai ser retornado undefined */
numPares.find(function(elemento){

    /* Nós definimos a condição que queremos usar
        como uma busca para encontrar o elemento no array. */
    return console.log(elemento == 5);
})

let frutas = ['uva','maçã','cereja','morango','abacaxi'];
let fruta = frutas.find(function(fruta){
    return fruta === 'abacaxi';
});

console.log(fruta);


/*  .filter() - Este método também recebe uma função como parâmetro.
    Desloca o array e filtra os elementos de acordo com uma condição que existe no callback.
    Assim como no find, o callback passado para o filter também precisa retornar um booleano (true ou false).
    Filter retorna um novo array, que contém apenas os elementos que atenderam a essa condição.
    Isto significa que o nosso novo array pode contar menos elementos do que o original.*/
let filtrar = numPares.filter(function(valor){
    return valor > 6;
});

console.log(filtrar);

/*  .reduce() - Este método percorre o array e retorna um único valor.
    Recebe um callback que será executado em cada elemento do array. Ele, por sua vez,
    recebe dois parâmetros: um 'acumulador' e o 'elemento de corrente' pelo qual está passando.*/ 
let total = numPares.reduce(function(acumulador, valor){
    return acumulador += valor;
})

console.log(total);

/*  .foreach() - A finalidade deste método é iterar sobre um array.
    Ele recebe um callback como parâmetro que, ao contrário dos métodos anteriores NÃO retorna nada. */
numPares.forEach(function(valor, indice){
    console.log(`O índice ${indice} tem o valor ${valor}`);
})

/* For in -> percorrer em cada uma das propriedades de um objeto.
    - Propriedades enumeráveis.
*/
let pessoa = {
    nome: 'Alexandre',
    idade: 30,
    profissao: 'Analista de TI'
}

console.log('Iterando em um objeto');
for(let dado in pessoa){
    console.log(dado, pessoa[dado]);
}

/* For of -> Nós permite iterar sobre cada um dos valores de um elemento iterável, por exemplo, sobre um array ou até mesmo strings.
    - Elementos iteráveis.
*/
let series = ['Breaking Bad', 'GoT']
console.log('Series')
for(let serie of series){
    console.log(serie);
}

/* Objeto Date */
let dataAtual = new Date();
console.log(dataAtual);
console.log(dataAtual.getDay()); // dia da semana, contagem a partir do domingo iniciando do 0
console.log(dataAtual.getMonth() + 1 ); // contagem dos meses a partir do 0
console.log(dataAtual.getFullYear()); // ano
console.log(dataAtual.getDate()); // dia do mês

/* Desestruração */
// Array, importante: deve seguir a ordem, exemplo se quisermos pular um valor, 

let cores = ['Azul','Branco','Verde','Vermelho'];
let [corAzul, corBranco, ,CorVermelho] = cores;
console.log(corAzul, corBranco, CorVermelho);

let green = cores[2];
console.log(green);

//Objetos
let colaborador = {
    user:"Ale",
    cargo:"Analista",
    idade: 30
};
            // nessa parte podemos renomear a propriedade
const {user,idade: minhaIdade} = colaborador;
console.log(user, minhaIdade);
console.log(user, minhaIdade);

let cargo = colaborador.cargo;
console.log(cargo);

/* A desestruturação NÃO modifica o array ou objeto literal de origem.
    Seu único objetivo é copiar os valores de forma mais prática e rápida. */

/* Spread Operator - Operador de propagação */

//array
let frutasA = ['banana','pera','morango'];
let frutasB = ['uva','pessego'];
let todasFrutas = [...frutasA,...frutasB];
console.log(todasFrutas);

//objetos
let  cliente = {
    nome: 'alexandre',
    idade:30
}

let infoPessoal = {
    tel: '1199999999',
    email: 'email@email.com',
    ...cliente
}

let endereco = {
    endereco: 'rua',
    ...infoPessoal
}

console.log(endereco)

//também funciona com funções
function letras(...params){
    console.log(params);
}
letras("teste");
letras("testeA", "testeB");

let notas = [9.3,8.5,3.2,7,10]
console.log(Math.min(...notas));
/* Operador Spread(...) se escreve com 3 pontos consecutivos, antes do nome da variável
    Elemento iterável. A variável pode conter um array, uma string ou um objeto. */