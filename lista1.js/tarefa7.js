const read = require("readline-sync")
var idum = parseInt(read.question("informe a sua idade"))
var iddois = parseInt(read.question("informe a idade de seu irmão do meio"))
var idtres = parseInt(read.question("informe a idade de seu irmão mais velho"))
if(idum < iddois && idtres){
    console.log("verdadeiro")
}else {
    console.log("falso")
}