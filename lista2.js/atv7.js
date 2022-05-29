const read = require("readline-sync")
var turno = read.question("Em que turno você estuda: ")
if(turno == "m"){
    console.log("Bom dia!")
}else if(turno == "v"){
    console.log("Boa tarde!")
}else if(turno == "n"){
    console.log("Boa noite!")
}else{
    console.log("Valor inválido")
}