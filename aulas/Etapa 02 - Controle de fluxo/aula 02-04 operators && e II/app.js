/* 

**`const password = '12345678'`**: Nesta linha, uma constante **`password`** é declarada e inicializada com o valor **`'12345678'`**. Esse valor representa a senha que será avaliada. Note que essa senha é apenas um exemplo e poderia ser qualquer outra string representando uma senha.

**`if (password.length >= 12) {`**: Nesta linha, inicia-se uma estrutura condicional (if). A expressão nos parênteses verifica se o comprimento da senha é maior ou igual a 12.

**`console.log('Senha forte!')`**: Se a condição do **`if`** for verdadeira (ou seja, se a senha tiver 12 ou mais caracteres), esta linha será executada, e a mensagem “Senha forte!” será impressa no console.

**`} else if (password.length >= 8) {`**: Se a condição do **`if`** anterior for falsa, o programa passará para a próxima condição. Nesta linha, inicia-se outra estrutura condicional (else if), e a expressão nos parênteses verifica se o comprimento da senha é maior ou igual a 8.

**`console.log('Senha média!')`**: Se a condição do **`else if`** for verdadeira (ou seja, se a senha tiver entre 8 e 11 caracteres, inclusive), esta linha será executada, e a mensagem “Senha média!” será impressa no console.

**`} else {`**: Se nenhuma das condições anteriores for verdadeira, o programa chegará a este ponto e executará o bloco de código dentro do **`else`**.

**`console.log('Senha fraca!')`**: Se a senha tiver menos de 8 caracteres, esta linha será executada, e a mensagem “Senha fraca!” será impressa no console.

*/

const password = '12345678'

if (password.length >= 12) {
  console.log('Senha forte!')
} else if (password.length >= 8) {
  console.log('Senha média!')
} else {
  console.log('Senha fraca!')
}