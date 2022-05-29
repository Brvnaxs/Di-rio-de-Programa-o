const read = require("readline-sync")
for (i = 0; i <5; i ++){
    var numero = parseInt(read.question("Informe um número"));
    var div = 0;
    for(cont = 0; cont <= numero; cont ++){
        if(numero % cont == 0){
            div++;
        }
    } 
    if(div==2){
        console.log("O número é primo")
    }else{
        console.log("O número não é primo")
    }
}