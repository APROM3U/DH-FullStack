//const somar = (numA, numB) => numA + numB;

//const calculadora = (numA, numB, operacao) => operacao(numA, numB);

//console.log(calculadora(10, 20, somar));


// let meuCallback = () => console.log('teste olá mundo');
// setTimeout(meuCallback,1000);

// function nomeCompleto(nome, sobrenome){
//     return nome + ' ' + sobrenome;
// };

// function saudacao(nome, sobrenome, nomeCompleto){
//     return 'Olá ' + nomeCompleto(nome, sobrenome) + '!';
// };

// console.log(saudacao('José', 'Pedro', nomeCompleto));

function adicionarHttp(url) {
    return  "http://"  + url;
}

const site = 'google.com'

function processar(site, adicionarHttp) {

    const lista = [];

    for (let idx = 0; idx < site.length; idx++){
    
        lista.push(adicionarHttp(site[idx]));
    }

    return lista;

}