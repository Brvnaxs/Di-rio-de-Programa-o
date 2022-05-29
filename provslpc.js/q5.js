var binario = '110101'; potencia = binario.length -1; resultado = 0
for(i = 0; i < binario.length; i++){
    resultado = resultado + binario[i] *2 **potencia
    potencia--
}
console.log('Conversão de 110101 para inteiro: ',resultado)