const read = require("readline-sync")
var tl = read.question("Informe sua nota um:")
var as = read.question("Informe sua nota dois:")
var ef = read.question("Informe sua nota três:")
var media = (tl+as+ef)/3
if(media <= 4){
    console.log("Você está reprovado.")
}else if(4<=media<7){
    console.log("Você está de recuperação.")
}else if(media>=7){
    console.log("Você foi aprovado!")
}