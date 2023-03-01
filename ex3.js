// Velocidade máxima de 70km/h
// A cada 5km acima do limite, 1 ponto na carteira
// Caso pontos na carteira for maior que 12 = 'Carteira Suspensa'


verificarVelocidade(53);

function verificarVelocidade(Velocidade) {
    const velocidadeMAxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMAxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMAxima) / kmPorPonto));
        if (pontos >= 12)
            console.log('Carteira Suspensa')
        else
            console.log('Pontos',pontos);
    }
}