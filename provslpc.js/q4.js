var senha = '54216', chave = [], soma = 0;
for(var i = 0; i < senha.length; i++){
    chave[i] = parseInt(senha[i])
    soma = soma + (chave[i]**2)
   console.log('A raiz quadrada de ',chave[i],' será ',(chave[i]**2))
}

console.log('A chave da senha será: ',soma)