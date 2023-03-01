// NATUREZA DINÂMICA DE OBJETOS

const mouse = {
    cor : 'Preto'
    marca : 'Apple'
}

mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('Mudando DPI');
}

delete mouse.velocidade;
delete mouse.trocarDPI;

console.log(mouse);

// podemos retirar, adicionar, de muitas maneiras






// CLONAGEM DE OBJETO

const celular = {
    marcaCelular : 'Apple'
    tamanhoTela : {
        verical : 155
        horizontal : 75
    },
    ligar: function (){
        console.log("Fazendo Ligação...")
    }
}


const novoObjeto = Object.assign({},celular);
console.log(novoObjeto);

const objetoDois = {...celular};
console.log(objetoDois);


// posso adicionar coisas dentro do {} do objeto
// como bateria = 5000


const novoObjeto = Object.assign({
    bateria: 5000
},celular);
console.log(novoObjeto);

const objetoDois = {...celular};
console.log(objetoDois);