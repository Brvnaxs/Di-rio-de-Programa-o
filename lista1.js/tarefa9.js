const read= require("readline-sync")
var terreno= read.question("informe a largura do terreno")
var terrenodois = read.question ("informe o comprimento do terreno")
var casa = read.question("informe a largura da casa")
var casadois = read.question ("informe o comprimento da casa")
if(terreno * terrenodois >= casa * casadois){
    console.log("area vaga" , terreno * terrenodois - casa*casadois)
}else {
    console.log("valores invalidos")
}