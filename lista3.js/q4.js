//loop até o usuário escolher sair.
const read = require("readline-sync")
escolha = ""
n = "Nao"
while(escolha != n){
    escolha = read.question("Olá, Se deseja continuar digite 'sim', caso contrário digite 'não'.\n ")
    if(escolha == "Sim"){
        console.log("Você decidiu continuar.")
    }else if(escolha != "Sim" && escolha != "Nao"){
        console.log("Palavra inválida, tente novamente: ")
    }
}
console.log("Você digitou 'Não', programa encerrado.")