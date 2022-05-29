const read = require("readline-sync")
var sl = read.question("Informe seu salario")
var fgts = (sl*0.08)
var inss = (sl*0.12)
var ir = 0
if(sl<1500){
    ir=sl*0.075
    console.log("O salario bruto é" ,sl, "\nO fgts será", fgts, "\nO inss será",inss, "\nO imposto de renda será:",ir,"\nO salario liquido será",sl-inss-ir)
}else if(sl>=1500&&sl<2000){
    ir=sl*0.01
    console.log("O salario bruto é" ,sl, "\nO fgts será", fgts, "\nO inss será",inss, "\nO imposto de renda será:",ir,"\nO salario liquido será",sl-inss-ir)
}else{
    ir=sl*0.15
    console.log("O salario bruto é" ,sl, "\nO fgts será", fgts, "\nO inss será",inss, "\nO imposto de renda será:",ir,"\nO salario liquido será",sl-inss-ir)
}