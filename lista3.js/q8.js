const read = require("readline-sync")
console.log("Informe dois números entre 0 e 20: ")
n1 = parseInt(read.question( ))
n2 = parseInt(read.question( ))
if(n1 > n2){
    for(i = n2; i< n1; i++){
        console.log(i)
    }
}else{
    for(i = n1; i < n2; i++){
        console.log(i)
    }
}
