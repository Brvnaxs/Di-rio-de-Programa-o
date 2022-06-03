const read = require("readline-sync")
n = parseInt(read.question("Informe um número para treinar a tabuada: "))
console.log("Está é a tabuada do número ",n,":")
for(i = 0; i <= 10; i++){
    console.log(n,"X",i,"=",n*i)
}