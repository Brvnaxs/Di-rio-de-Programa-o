const read=require("readline-sync")
var impar = read.question ("Informe um numero")
if(impar %2 == 0){
    console.log("este numero é par")

}else{
    console.log("este numero é impar")
}
