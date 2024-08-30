//Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada escrever a mensagem "Acesso negado". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso permitido" e o algoritmo deve ser encerrado. Considere que a senha correta é 2024.

const prompt = require('prompt-sync');
const entrada = prompt();

var senhaCorreta = 2024;
var senha = entrada(`Digite uma senha: `);

while (senha != senhaCorreta) {
  console.log(`Acesso Negado`);
  var senha2 = entrada ('Digite a senha novamente: ')
  if (senha2 == senhaCorreta) {
    console.log('Acesso permitido');
    break;
  }
}