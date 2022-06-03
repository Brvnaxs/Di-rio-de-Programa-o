const read = require("readline-sync")
senha = ""
user = ""
while(senha == user){
    user = read.question("Para prosseguir com seu cadastro, informe seu nome de usuário: ")
    senha = read.question("Agora, informe uma senha: ")
    if(senha == user){
        console.log("Sua senha não pode ser igual ao seu nome de usuário, tente novamente:")
    }
}
console.log("Cadastro concluído.")