// ****************************** Arrays ******************************

let heroes = ['Batman', 'Catwoman', 'Iron Man']
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Parker', 'Diana', 19, 18]

// Métodos de arrays
const joinHeroes = heroes.join(' | ')
// Retorna o index de um item dentro do array.
const indexOf25 = ages.indexOf(25)
// Concatena novos items dentro de um array, sem modificar o array original.
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
// Insere items no array original 
const pushToHeroes = heroes.push('Cyclops', 'Hulk') // 'console.log(pushToHeroes)' // 5
// Remove e retornar o último item de um array.
const popHeroes = heroes.pop()

console.log(heroes) // 'Hulk'