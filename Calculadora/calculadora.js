
function somar(a,b){
    return a + b;
}

function subtrair(x,y){
    return x - y;
}

function dividir(dividendo, divisor){
    const msg = 'Não é possível dividir por 0';
    if(divisor == 0){
        return msg;
    } else {
        return dividendo / divisor;
    }
}

function multiplicar(valor1, valor2){
    return valor1 * valor2;
}
