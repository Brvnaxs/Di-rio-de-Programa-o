var a = '5244875998566147' ; var b = '111548874596544214777855222'
var contA = 0; var contB = 0;

for(i = 0; i < a.length; i++){
    if(a[i] % 2 == 0){
        contA++
        if(contA >= 3){
            break
        }
    }else{
        contA = 0;
    }
}
for(i = 0; i < b.length; i++){
    if(b[i] % 2 == 0){
        contB++
        if(contB >= 3){
            break
        }
        
    }else{
        contB = 0;
    }
}
console.log("Quantidade de números pares seguidos em A: ",contA, "\nQuantidade de números pares seguidos em B: ",contB)