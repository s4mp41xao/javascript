// ******************************Template strings******************************

const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Matheus Saad'
const postComments = 15

//// Usando concatenacão ES5
// const postMessage =
//   'O post "' +
//   postTitle +
//   '", do ' +
//   postAuthor +
//   ', tem ' +
//   postComments +
//   ' comentários.'

// console.log("Você manja do filme 'As Branquelas'?")

//// Usando templante Strings ES6 ou Template Lirerals
/// Na interpolação de strings, utilizamos a sintaxe ${} para incluir as variáveis dentro da string. Dessa forma, podemos referenciar o valor das variáveis diretamente na mensagem, sem a necessidade de usar concatenação de strings.

// const postMessage = `O post ${postTitle}, do ${postAuthor}, tem ${postComments} comentários.`

// console.log(postMessage) // 'O post É bolacha ou biscoito?, do Matheus Saad, tem 15 comentários.'

//// Criando templates HTML
const html = `
  <h2>${postTitle}</h2>
  <p>Autor: ${postAuthor}</p>
  <span>Este post tem ${postComments} comentários</span>
  `

console.log(html)
