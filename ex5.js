// Crie um método para ler propriedades de um objeto e
// exibir somente as propriedades tipo STRING deste objeto


const filme = {
    titulo : 'LA Dolce Vita',
    data : 1960,
    diretor : 'Frederico Fellini',
}

exibirPropriedades(filmes);
function exibirPropriedades(obj) {
    for (prop in obj)
        if (typeof prop === 'string')
            console.log(prop,obj[prop])
}