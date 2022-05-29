const read = require("readline-sync")
var sal = 280.00
var perc = 20
var percum = (sal*perc)/100
var novosal = (sal+percum)
console.log("Salário antes do ajuste",sal,"\nPercentual de aumento aplicado:",perc,"\nValor do aumento:",percum,"\nNovo salário:",novosal)
