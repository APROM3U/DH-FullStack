//module.exports.cinema = //'Cine House'
// [{
//     nome: 'Alexandre',
//     cinema: 'Cine House'
// }];

//module.exports.cinema = [{
//     nome: 'Alexandre',
//     cinema: 'Cine House'
// }];

const cinema = "Cine House";

const catalogo = require("../database/catalogo.json");

const addFilme = function (
  codigo,
  titulo,
  duracao,
  atores,
  anoLancto,
  emCartaz
) {
  const novoFilme = {
    codigo,
    titulo,
    duracao,
    atores,
    anoLancto,
    emCartaz,
  };
  catalogo.push(novoFilme);
};

// function imprimirFilmePelaPosicao(posicao) {
//   const filme = catalogo[posicao];

//   // 1: Titanic, Duração de 3hrs, atores: kate e Leonardo, Lancto 1998...
//   const txtCodTitulo = filme.codigo + " - " + filme.titulo;
//   const txtDuracao = filme.duracao;
//   const txtAtores = filme.atores.join(", ");
//   const txtLancto = filme.anoLancto;
//   const txtCartaz = filme.emCartaz;

//   var aux = "";

//   switch (txtCartaz) {
//     case true:
//       aux = "Sim";
//       break;
//     default:
//       aux = "Não";
//   }

//   const Descricao =
//     txtCodTitulo +
//     " - Duração: " +
//     txtDuracao + 'hrs' +
//     " - Atores: " +
//     txtAtores +
//     " - Ano de Lançamento: " +
//     txtLancto +
//     " - Está em Cartaz: " +
//     aux;

//   console.log('Descrição do filme com código: ' + Descricao);
// }

function imprimirFilmePelaPosicao(posicao) {
  const filme = catalogo[posicao];

  const descricao = ` 
    Filme:
    -----------------------------------------------
    Código: ${filme.codigo},
    Título: ${filme.titulo};
    Atores: ${filme.atores.join(", ")},
    Duração: ${filme.duracao},
    Lançamento: ${filme.anoLancto},
    Em Cartaz: ${filme.emCartaz ? "Sim" : "Não"}
  `;
  console.log(descricao);
}

const listarTodosFilmes = () => {
  catalogo.forEach((filme, idx) => imprimirFilmePelaPosicao(idx));
};

// const listarTodosFilmes = () => {
//   for(let idx = 0; idx < catalogo.length; idx++){
//     imprimirFilmePelaPosicao(idx);
//   }
// };

// function listarTodosOsFilmes () {
//   catalogo.forEach((filme, idx) => imprimirFilmePelaPosicao(idx))
// };

// const listarFilmesDeLongaDuracao = () => {

//   // catalogo.filter((filme, idx) => {
//   //   if(filme.duracao > 2) imprimirFilmePelaPosicao(idx);
//   // });

//   //console.log(movie);
// };

const listarFilmesDeLongaDuracao = () => {
  const filmesFiltrados = catalogo.filter((filme) => filme.duracao >= 2);

  filmesFiltrados.forEach((filme) => {
    imprimirFilmePelaPosicao(filme.codigo - 1);
  });
};

const listarFilmesCartaz = () => {
  for (let idx = 0; idx < catalogo.length; idx++) {
    const filme = catalogo[idx];
    if (filme.emCartaz) {
      imprimirFilmePelaPosicao(idx);
    }
  }
};

function alterarStatus(imprimirFilmePelaPosicao) {
  let filme = catalogo[imprimirFilmePelaPosicao];

  //filme.emCartaz = filme.emCartaz ? false : true;
  filme.emCartaz = !filme.emCartaz;
}

function buscarFilme(imprimirFilmePelaPosicao, callback) {
  const filme = catalogo[imprimirFilmePelaPosicao];
  setTimeout(callback, 5000, filme);
}

module.exports = {
  cinema,
  catalogo,
  addFilme,
  imprimirFilmePelaPosicao,
  listarTodosFilmes,
  listarFilmesCartaz,
  alterarStatus,
  buscarFilme,
  listarFilmesDeLongaDuracao,
};
