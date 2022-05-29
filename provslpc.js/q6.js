const read = require('readline-sync')
var nome = read.question('Informe seu nome completo: ')
console.log(nome.split('').reverse().join(''))