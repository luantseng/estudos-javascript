// IF E ELSE

if (condicao) {
    // codigo a ser executado
}
else if (outraCondicao){
    // codigo a ser executado
}
else {
    // codigo a ser executado
}


// se a hora estiver entre 06:00 e 12:00, exibiremos: 'Bom dia!'
// se a hora estiver entre 12:00 e 18:00, exibiremos: 'Boa tarde!'
// caso contrário: 'Boa noite!'

let hora = 10;

if(hora > 6 && hora < 12){
    console.log("Bom dia!")
}
else if (hora > 12 && hora < 18){
    console.log("Boa tarde!")
}
else {
    console.log("Boa noite!")
}