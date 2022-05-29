const read = require("readline-sync")
var mat = read.question("Informe sua nota de matemática:")
var port = read.question("Informe sua nota de português:")
var geo = read.question("Informe sua nota de geografia:")
var cont = (mat+geo+port)/3 
if(cont>=7){
    console.log("Você passou!");
}else{
    console.log("Você não passou.");
}