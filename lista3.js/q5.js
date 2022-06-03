const read = require("readline-sync")
ac = 0
for(i = 0; i < 10; i++){
   idades = parseInt(read.question("Informe sua idade: "))
    ac = ac +idades 
}
media = ac/10
console.log("A média das idades será: ",media)
