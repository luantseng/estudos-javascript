// PAR OU ÍMPAR

// receba uma quantidade de valores para avaliar
// função queu exibe cada valor (par ou ímpar).

exibirTipo(5);
function exibirTipo(limite){
    for (let i = 0; i <= limite; i++){
        if (i % 2 === 0)
            console.log('PAR');
        else 
            console.log('IMPAR');
    }
}