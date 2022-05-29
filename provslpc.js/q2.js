var pesos = [80.5, 98.3, 75.2, 85.0, 74.1, 53.3, 61.2, 48.3, 70.3, 52.1]
var alturas = [1.75, 1.89, 1.88, 1.65, 1.74, 1.52, 1.56, 1.89, 1.99, 1.56]
var imc = 0; var contA = 0; var contB = 0;
for(var i = 0; i < pesos.length; i++){
    imc = pesos[i]/(alturas[i]^2)
    if(imc >= 30){
        contA++

    }else{
        contB++
    }
}
console.log('O profissional A terá um total de ',contA,' alunos','\nE o profissional B terá um total de',contB,' alunos.')