const read = require("readline-sync")
var it = read.question("Informe sua idade: ")
if(it %2 == 0){
    console.log("O número é par")
}else{
    console.log("O número é impar")
}