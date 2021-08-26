console.log('Testando Node!');


const fs = require("fs");
const superHerois = require("./superHerois");

let moment = require('moment');

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

let data = moment().format('MM do YY');

console.log(superHerois);