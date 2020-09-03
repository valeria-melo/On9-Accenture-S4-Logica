/*4. Crie um programa que faça o cadastro de uma pessoa.
   O programa deve receber os seguintes dados:

- nome completo;
- idade;
- altura;
- metros caminhados no dia*/

const readlineSync = require ('readline-Sync')



let cadastroDePessoas ={
    nomeCompleto: '',
    idade: 0,
    altura: 0,
    mestrosCaminhadosNoDia: 0
};

cadastroDePessoas.nomeCompleto = readlineSync.question ("Qual o seu nome: ");
cadastroDePessoas.idade = readlineSync.question ("Qual a sua idade: ");
cadastroDePessoas.altura = readlineSync.question ("Qual a sua altura: ");
cadastroDePessoas.metrosCaminhadosNodia = readlineSync.question ("Quantos metros de caminha você fez no dia");
console.log(cadastroDePessoas)