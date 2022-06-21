const read = require("readline-sync")
//Função de cadastro: recebe os dados solicitados na primeira condição e armazena num json.
function cadastrar(nome,idade,sexo,end,lista){
    const usuario = {
        Nome: nome,
        Idade: idade,
        Sexo: sexo,
        Endereco: end
    }
    //Ainda na função de cadastro armazena o json numa lista de usuários.
    lista.push(usuario)
   }
//Função para armazenar apenas os nomes dos usuários: recebe como parametro um array e a variavel 'nome' solicitada na primeira condição.
function armazenar(array,n){
    array.push(n)
}
//Função para consultar o usuário pelo indice: recebe a lista de nomes e um número de índice dado pelo usuário.
function consultar(lista,id){
    console.log("O usuário de ID: ",id,"é: ",lista[id])
}
//Função para listar todos os dados: recebe a lista de usuários como parametro.
function listar(lista){
    //Cria um for para percorrer toda a lista
    for(i = 0; i < lista.length; i++){
        //Vai acessar o indice da lista('i') que seram os usuários e acessa as chaves de cada dado do usuário(coloca o nome da chave ex: [idade])
        console.log('ID: ',i,'|Nome: ',lista[i]["Nome"],'|Idade: ',lista[i]["Idade"],'|Sexo: ',lista[i]["Sexo"],'|Endereço: ',lista[i]["Endereco"])

}
}
let nomes_usuarios = []
let lista_usuarios = []
var escolha = " "
while(escolha != "0"){
    escolha = read.question("Olá, escolha uma das opções: \n0 - Para sair do sistema \n1 - para cadastrar um usuário \n2 - para consultar um usuário pelo ID \n3 - para listar todos os usuários cadastrados.\n")
    if(escolha == "1"){
        console.log("Vamos precisar que você informe alguns dados para prosseguir com o cadastro:")
        const nome = read.question("Nome: ")
        const idade = parseInt(read.question("Idade: "))
        const sexo = read.question("Sexo: ")
        console.log("Por fim, informe seu endereço:")
        const end = {
            Rua: read.question("Rua: "),
            Nº: parseInt(read.question("Nº: ")),
            Cidade: read.question("Cidade: "), 
            Estado: read.question("UF: ")
        }
        cadastrar(nome,idade,sexo,end,lista_usuarios)
        armazenar(nomes_usuarios,nome)
        
    }
    else if(escolha == "2"){
        var r =parseInt(read.question("Informe o ID do usuário que deseja consultar: "))
        consultar(nomes_usuarios,r)
    }
    else if(escolha == "3"){
        console.log("Estes são os dados dos usuários cadastrados em nossa plataforma:")
        listar(lista_usuarios)
    }
}
console.log("Programa encerrado, tenha um bom dia.")
