// ESCREVA UMA FUNÇÃO QUE USA 2 NÚMEROS E RETORNA O MAIOR ENTRE ELES


let valorMaior = max(5,9);
console.log(valorMaior);   // retornará o valor 9


function max(numero1, numero2) {
    if(numero1 > numero2)
        return numero 1;
    else return numero2;
}


function max(numero1, numero2) {
    return numero1>numero2 ? numero1 : numero2;
}