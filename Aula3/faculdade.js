const c = [];
const a = [];
const b = [];


let tempoInicial = new Date();
let tempoFinal = new Date();

tempoInicial.getDate();
for (let i=1; i <=10; i++ ){
    for(let j =1; j <=10; j++){
        c[i,j] = a[i,j] + b[i,j]
    }
}

 for (let i=1; i <=10; i++ ){
     for(let j =1; j <=10; j++){
         c[i,j] = a[i,j] * b[i,j]
     }
 }
tempoFinal.getDate();
console.log(c, tempoInicial, tempoFinal)