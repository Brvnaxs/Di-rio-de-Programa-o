const read = require("readline-sync")
//Função de cadastro: armazena os dados que solicitei na primeira condição dentro do json.
function cadastrar(nome, idade, sexo, end,id, lista) {
    const usuario = {
        id: id,
        nome: nome,
        idade: idade,
        sexo: sexo,
        endereco: end
    }
    //Ainda na função de cadastro coloco o json dentro de uma lista de usuários.
    lista.push(usuario)
}
//Função para consultar o usuário pelo id: a função recebe como parâmetro a lista de usuários e o número de id que o usuário deseja consultar.
function consultar(lista, id) {
    console.log("O usuário de ID: ", id, "é: ", lista[id]["nome"])
}
//Função para listar todos os dados: recebe a lista de usuários como parâmetro.
function listar(lista) {
    //A função percorre toda a lista por meio de um for.
    for (i = 0; i < lista.length; i++) {
        //Vai acessar o indice da lista('i') que seram os usuários e acessa as chaves de cada dado do usuário(coloca o nome da chave ex: [idade])
        console.log('ID: ', lista[i]["id"], '|Nome: ', lista[i]["nome"], '|Idade: ', lista[i]["idade"], '|Sexo: ', lista[i]["sexo"], '|Endereço: ', lista[i]["endereco"])
    }
}
let lista_usuarios = []
var id = 0
var escolha = " "
while (escolha != "0") {
    escolha = read.question("Olá, escolha uma das opções: \n0 - Para sair do sistema \n1 - para cadastrar um usuário \n2 - para consultar um usuário pelo ID \n3 - para listar todos os usuários cadastrados.\n")
   /*Primeira condição: Caso o usuário opte por '1' o sistema vai solicitar os dados ao usuário e depois chamar a função de cadastro
   e armarmazena esses dados dentro de um json e o json dentro de uma lista*/
    if (escolha == "1") {
        console.log("Vamos precisar que você informe alguns dados para prosseguir com o cadastro:")
        const nome = read.question("Nome: ")
        const idade = parseInt(read.question("Idade: "))
        const sexo = read.question("Sexo: ")
        console.log("Por fim, informe seu endereço:")
        const end = {
            rua: read.question("Rua: "),
            numero: parseInt(read.question("Nº: ")),
            cidade: read.question("Cidade: "),
            estado: read.question("UF: ")
        }
        //Para gerar um id, fiz um for para toda vez que um usuário for adicionado na lista, ele adiciona mais um número a sequência.
        for(i = 0; i < lista_usuarios.length ; i++){
            id = i+1
        }
        cadastrar(nome, idade, sexo, end, id, lista_usuarios)
    }
    /*Na segunda condição, caso o usuário opte por '2', o sistema irá solicitar que ele informe
     o número de id e irá chamar a função de consulta.*/
    else if (escolha == "2") {
        var r = parseInt(read.question("Informe o ID do usuário que deseja consultar: "))
        consultar(lista_usuarios, r)
    }
    /*Na terceira e última condição, caso o usuário opte por '3', o sistema irá chamar a função lista para
     mostrar todos os usários no sistema e seus dados.*/
    else if (escolha == "3") {
        console.log("Estes são os dados dos usuários cadastrados em nossa plataforma:")
        listar(lista_usuarios)
    }
}
//Por fim, ao ser encerrado o sistema irá mostrar a seguinte mensagem ao usuário.
console.log("Programa encerrado, tenha um bom dia.")