const read = require("readline-sync")
var ci = read.question("Informe a cidade em que você mora: ")
var gas = read.question("Informe o valor da gasolina na sua cidade: ")
var alc = read.question("Informe o valor do álcool: ")
if(alc< 0.70*gas){
    console.log("Na cidade ",ci, "o valor do álcool corresponde" ,gas-0.70,". Então compensa abastecer com álcool")
}else{
    console.log("Não compensa")
}