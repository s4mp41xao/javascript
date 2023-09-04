/* 

A constante **`age`** é declarada e atribuída o valor 19. Essa variável representa a idade de uma pessoa.

Em seguida, um bloco condicional **`if`** é usado para testar uma condição: **`age > 18`**. Essa condição verifica se o valor da variável **`age`** é maior que 18.

Se a condição for avaliada como verdadeira (ou seja, se a idade for maior que 18), o bloco de código nas chaves **`{}`** do **`if`** será executado.

O bloco contém apenas uma instrução **`console.log('Você é maior de 18 anos.')`**, que exibirá a mensagem “Você é maior de 18 anos.” no console do navegador ou ambiente de execução.

*/

const age = 19

if (age > 18) {
  console.log('Você é maior de 18 anos.')
}

/* 

A constante **`simpsons`** é declarada como uma matriz contendo quatro elementos: 'Homer', 'Marge', 'Lisa' e 'Bart'. Cada elemento representa um personagem da família Simpson.

Em seguida, um bloco condicional **`if`** é usado para testar a condição **`simpsons.length >= 3`**. Essa condição verifica se o comprimento da matriz **`simpsons`** é maior ou igual a 3.

Se a condição for avaliada como verdadeira (ou seja, se o array tiver três ou mais itens), o bloco de código nas chaves **`{}`** do **`if`** será executado.

O bloco contém apenas uma instrução **`console.log('O array possui três ou mais itens')`**, que exibirá a mensagem “O array possui três ou mais itens” no console do navegador ou ambiente de execução.

*/ 

const simpsons = ['Homer', 'Marge', 'Lisa', 'Bart']

if (simpsons.length >= 3) {
  console.log('O array possui três ou mais itens')
}


/* 

 Estruturas condicionais; terceiro exemplo.

 A constante **`password`** é declarada e recebe o valor da string '1234'. Essa variável representa uma senha.

Em seguida, um bloco condicional **`if`** é usado para testar a condição **`password.length <= 4`**. Essa condição verifica se o comprimento da string **`password`** é menor ou igual a 4.

Se a condição for avaliada como verdadeira (ou seja, se a senha tiver quatro caracteres ou menos), o bloco de código nas chaves **`{}`** do **`if`** será executado.

O bloco contém apenas uma instrução **`console.log('A senha contém poucos caracteres.')`**, que exibirá a mensagem “A senha contém poucos caracteres.” no console do navegador ou ambiente de execução.

*/

const password = '1234'

if (password.length <= 4) {
  console.log('A senha contém poucos caracteres.')
}

