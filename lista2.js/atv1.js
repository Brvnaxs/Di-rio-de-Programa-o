const read =  require("readline-sync")
var um = read.question("Informe sua idade: ")
if(20<= um && 90>= um){
    console.log("Verdadeiro")
}else{
    console.log("falso")
}
