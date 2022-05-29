const read = require("readline-sync")
var nm = read.question("Informe seu nome: ")
var alt = read.question("Informe sua altura: ")
var ps = read.question("Informe seu peso: ")
var imc = (ps/(alt*alt))
if(imc<18.5){
    console.log("Você está abaixo do peso")
}else if(imc>=18.5&&imc<=24.9){
    console.log("Você se encontra no seu nivel")
}else if(imc>24.9&&imc<=29.9){
    console.log("Levemente acima do peso")
}else if(imc>29.9&&imc<=34.9){
    console.log("Você se encontra em obesidade de grau um")
}else if(imc>34.9&&imc<=39.9){
    console.log("Você se encontra em obesidade de grau dois")
}else{
    console.log("Você se encontra em obesidade de grau três")
}

