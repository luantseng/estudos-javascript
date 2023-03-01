// FALSY

// undefined
// null
// 0
// false
// '' (string vazio)
// NaN - not a Number


// TRUTHY

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); // VERMELHO, pois o primeiro Truthy que ele
                        // encontrar, já pega como true


let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); // AZUL, pois o string vazio ('') é Falsy
