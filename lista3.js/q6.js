const read = require("readline-sync")
secret = 37
resp = " "
while(resp != secret){
    resp = parseInt(read.question("Adivinhe o número secreto: "))
    if(resp != secret){
        console.log("Não foi dessa vez, tente novamente:")
    }
}
console.log("Parabéns, você acertou, o número secreto é ",secret)
