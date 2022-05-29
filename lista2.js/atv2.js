const read = require("readline-sync")
var um =  read.question("Informe um número: ")
var dois = read.question("Informe o segundo número: ")
if(um>dois){
    console.log(um)
}else{
    console.log(dois)
}