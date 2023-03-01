// Operador 'e' (&&)
// Só retorna TRUE quando os dois forem TRUE

console.log(false && true); // FALSE
console.log(true && true); // TRUE


let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar); // FALSE



// Operador 'ou' (||)
// Retorna TRUE se um dos dois for TRUE

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log(podeAplicar); // TRUE 



// Operador 'not' (!)
// Negação

let candidatoRecusado = !podeAplicar; // se ele não pode aplicar
                                      // será recusado 

console.log(candidatoRecusado); // FALSE - pode aplicar