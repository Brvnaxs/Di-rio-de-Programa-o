const read=require("readline-sync")
var salario=parseFloat(read.question("informe seu salario bruto"))
var fgts= salario*0.08
var inss= salario*0.12
console.log("salario bruto:" , salario, "\nFGTS", fgts, "\nINSS", inss, "\n salario liquido",salario-fgts-inss)
