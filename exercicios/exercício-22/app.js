/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const getArrayCopy = array => array.map(name => name)

const names = ['Caio', 'André', 'Dário']

const orderedNames = getArrayCopy(names).sort()

console.log(orderedNames)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 3, name: 'Simba' },
  { id: 2, name: 'Nala' },
  { id: 1, name: 'Scar' },
  { id: 4, name: 'Mufasa' },
]

const orderedID = characters
  .map(({ id, name }) => ({ id, name }))
  .sort((character2, character1) => character2.id - character1.id)
console.log(orderedID)

// .sort(({ id: charac2ID }, { id: charac1ID }) => charac2ID - charac1ID)

/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]
const ascendingOrderedNumbers = getArrayCopy(numbers)
  .sort((score1, score2) => score1 - score2)

console.log(ascendingOrderedNumbers)

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

// Option 1

// let firstItemGreaterThan50

// for (let i = 0; i < randomNumbers.length; i++) {
//   if (randomNumbers[i] > 50) {
//     firstItemGreaterThan50 = randomNumbers[i]
//     break;
//   }
// }

// console.log(firstItemGreaterThan50)

// Option 2

const firstItemGreaterThan50 = randomNumbers.find((number) => number > 50)

console.log(firstItemGreaterThan50)

// Option 3

// const firstItemGreaterThan50 = randomNumbers.filter((number) => number > 50)[0]

// console.log(firstItemGreaterThan50)

/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const people = ['Cauã', 'Alfredo', 'Bruno']

const invertedNamesOrder = getArrayCopy(people).sort().reverse()

console.log(invertedNamesOrder)

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.S
*/

const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const showIngredients = ingredients.reduce((acc, item, index, array) => {
  const correctWordGender = /a$/.test(item) ? 'cozida' : 'cozido'
  const isLastItem = index === array.length - 1
  const ingredientMessage = acc + `${item} ${correctWordGender}`
  return isLastItem ? ingredientMessage : `${ingredientMessage}, `
}, '')

console.log(showIngredients)

// const showIngredients = ingredients.map(item => `${item} cozido`).join(', ').replace('cebola cozido', 'cebola cozida');

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const peopleAmount = topBrazilMovies
  .filter(({ distributedBy }) => distributedBy === 'Disney')
  .reduce((acc, { peopleAmount }) => acc + peopleAmount, 0)

console.log(peopleAmount)

// const disneyMoviesViews = topBrazilMovies.reduce((accumulator, movie) => {
//   if (movie.distributedBy === 'Disney') {
//     accumulator += movie.peopleAmount
//   }
//   return accumulator
// }, 0)

// console.log(disneyMoviesViews)

/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const dogs = pets
  .filter(({ type }) => type === 'Dog')
  .map(({ name, age, gender, type }) => ({ name, age: age * 7, gender, type }))

console.log(dogs)

/*
  09
  
  - Considerando o array topBrazilmovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

const ul = document.querySelector('.list-group')

// const titleMovies = topBrazilMovies.map(movie => ul.innerHTML += `<li>${movie.title}</li>`)

// const titleMovies = topBrazilMovies
//   .map(movie => `<li>${movie.title}</li>`)
//   .join('')

// ul.innerHTML = titleMovies

// titleMovies.forEach(movie => {
//   ul.innerHTML = `<li>${movie}</li>`

// })

const titleMovies = topBrazilMovies
  .reduce((acc, { title }) => acc + `<li>${title}</li>`, '')

ul.innerHTML = titleMovies


/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/