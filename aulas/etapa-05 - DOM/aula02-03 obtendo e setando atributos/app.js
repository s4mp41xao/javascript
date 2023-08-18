const link = document.querySelector('a')

link.innerText = 'Endereço do YouTube'

console.log(link)



// link.setAttribute('href', 'https://youtube.com')

// console.log(link.getAttribute('href'))

// Nota: o método setAttribute(arg1, arg2) recebendo dois argumentos
// O primeiro é o nome do atributo, e o segundo o novo valor do atributo.

const paragraph = document.querySelector('p')

console.log(paragraph.getAttribute('class'))

paragraph.setAttribute('class', 'sucess')

console.log(paragraph)

paragraph.setAttribute('style', 'color: green;')