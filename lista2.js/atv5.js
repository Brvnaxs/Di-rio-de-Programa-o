const read = require("readline-sync")
var  um = read.question("Qual tamanho de blusa vc veste? ")
if(um == "g"){
    console.log("Vc veste tamanho g");
}else if (um == "p"){
    console.log("vc veste tamanho p");
}else if (um == "m"){
    console.log("vc veste tamanho m");
}else if (um== "x"){
    console.log("vc veste tamanho x ");
}else {
    console.log("Opção invalida");
}
