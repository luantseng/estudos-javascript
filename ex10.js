// FUNÇÕES DE FÁBRICA


function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return{
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo Ligação...")
        }
    }
}

const celular1 = criarCelular('Apple', 5.5, 5000);
console.log(celular1);



// FUNÇÕES CONSTRUTORAS

// faz a mesma coisa que as funções
// de fábrica, mas de outro jeito


function Celular(marcaCelular, tamanhoTela, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela= tamanhoTela,
    this.capacidadeBateria = capacidadeBateria
    this.ligar = function(){
        console.log("Fazendo Ligação...")
    }

}


const celular = new Celular('Apple, 5.5, 5000');
console.log(celular);
