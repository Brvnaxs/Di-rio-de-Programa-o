//Solicitar 10 números e mostrar se são ímpar ou par.
const read = require("readline-sync")
console.log("Informe 10 números: ")
for(i = 0; i < 10; i++){
   n = parseInt(read.question(" "))
    if(n % 2 == 0){
        console.log("O número informado é par.")
    }else{
        console.log("O número informado é ímpar.")
    }
}