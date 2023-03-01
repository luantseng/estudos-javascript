// for
// while
// do while
// for in
// for of

// mesma coisa em cenários diferentes






// 1) FOR

// Repetição 5x
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');
// console.log('Estou aprendendo!');

for(let i = 0;i < 5;i++){
    console.log('Estou aprendendo!',i)
}

// 0-4

for(let i = 1;i <= 5;i++){
    console.log('Estou aprendendo!',i)
}

// 1-5



for(let i = 5; i >= 1; i--){
    if(i % 2 !== 0){
        console.log(i)
    }
}








// 2) WHILE

let i = 5;

while (i >= 1){
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}









// 3) DO WHILE

let i = 0;
do {
    console.log('digitando');
} while (i < 10)

// sendo i = 0 e 0 < 10, console.log irá ser executado infinitamente










// 4) FOR IN

const pessoa = {
    nome: 'Luan'
    idade: 25
};


// key-value

for(let chave in pessoa) {
    console.log(chave);               // irá aparecer nome e idade em ordem
}



const cores = ['Vermelho', 'Azul', 'Verde'];

for (let indice in cores) {
    console.log(indice,cores[indice]) // irá aparecer as cores em ordem
}









// 5) FOR OF


const cores = ['Vermelho', 'Azul', 'Verde'];

for(let cor of cores){
    console.log(cor);
}