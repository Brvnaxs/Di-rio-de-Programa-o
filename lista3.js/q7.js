const read = require("readline-sync")
cont1 = 0
cont2 = 0
for(i = 0; i < 10; i++){
    n = parseInt(read.question("Informe dez números: "))
    if(n % 2 == 0){
        cont1 = cont1 +1
    }else{
        cont2 = cont2 +1
    }
}
console.log("A quantidade de números pares é ",cont1,"\nA quantidade de números ímpares é ",cont2)