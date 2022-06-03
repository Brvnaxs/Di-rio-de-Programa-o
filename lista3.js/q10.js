const read = require("readline-sync")
console.log("Informe 5 números: ")
ac = 0
for(i = 0; i < 5; i++){
    n = parseInt(read.question( ))
    ac = ac + 1
}
media = ac/5
console.log("A soma dos números é ",ac,"e a média é ",media)