const read  = require("readline-sync")
var c = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*~+-({}(\|/"
var senha = ""
 function criarUsuarioSenha(nome,sobre,caracteres,senha){
    var s1 = nome+"."+sobre 
     console.log("Temos a seguinte sugestão para seu nome de usuário:\n",s1)
     for(i = 0; i < 20; i++){
      s2 = Math.random()*caracteres.length
      senha += caracteres.substring(s2,s2+1)
    } 
   
    console.log("Sugestão de senha forte:\n", senha)
    console.log(senha.length)
 }
console.log("Olá, para seguirmos com seu cadastro:")
var n = read.question("Informe seu nome: ")
var s = read.question("Informe seu sobrenome: ")
sugestão = criarUsuarioSenha(n,s,c,senha)