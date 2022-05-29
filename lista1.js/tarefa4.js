const read=require ("readline-sync")
var um = parseFloat(read.question("Informe sua nota um"))
var dois  = parseFloat(read.question("Informe sua nota dois"))
var tres = parseFloat(read.question("Informe sua nota três"))
var media = (um+dois+tres)/3
console.log("Sua média será: ",media)