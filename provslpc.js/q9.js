var aparelhos = ['A72', 'Iphone X', 'Galaxy Note']
var tempo = [9, 14, 18]
valores = [1200, 3500, 2400]
var menor  = valores[0]-(tempo[0]*14)
var resultado = aparelhos[0]
for(i = 0; i < 3; i++){
    if(menor > tempo[i]-(tempo[i]*14)){
        menor = valores[i]-(tempo[i]*14)
        resultado = aparelhos[i]
    }
}
console.log('O melhor custo beneficío será: ',resultado)