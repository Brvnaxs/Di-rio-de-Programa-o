const read = require("readline-sync")
var n = 0;
var count = 0;
var i = 0;
n = parseInt(read.question("Informe um número: \n"))
//dividir o numero n vezes
for(i = 1; i <= n; i++){
    if(n%i==0){
        count = count +i
}
}
if(count == 2){
    console.log("O número " +n+ " é um número primo")
}else{
    console.log("O número " +n+ "não é primo")
}