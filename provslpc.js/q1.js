var notas = [6.8, 7.2, 3.5, 4.1, 7.1, 3.9, 8.2, 8.3, 9.1, 2.2, 3.7, 4.5, 7.5, 7.8] 
var ap = 0; var quantAp = 0; var rep = 0; var contRep = 0;
for(i = 0; i < notas.length; i++){
    if(notas[i] >= 6){
        ap = ap + notas[i]
        quantAp++
    }
    else{
        rep = rep + notas[i]
        contRep++
    }
}
ap = ap/quantAp
rep = rep/contRep
console.log('Média dos aprovados: ',ap, '\nMédia dos reprovados: ',rep,'\nA média dos aprovados será: ',((ap/rep)*100).toFixed(2),'% superior a dos reprovados.')