/*
  01 

  - Gere um novo array com apenas os números ímpares do array abaixo e exiba o novo array no console.
*/

const randomNumbers = [10, 30, 15, 25, 50, 40, 5]

const oddNumbers = randomNumbers.filter(randomNumber => randomNumber % 2 === 1 )

console.log(oddNumbers)

/*
  02 

  - Exiba no console abaixo quantos números abaixo de 501 o array abaixo possui.
*/

const crazyNumbers = [937, 5, 395, 402, 501, 333, 502, 781, 3, 691]

const numbersBelow500 = crazyNumbers.reduce((accumulator, crazyNumber) => {
  if (crazyNumber < 501){
    accumulator += 1
  }
  return accumulator
}, 0)

console.log(numbersBelow500)

// const numbersLower500 = crazyNumbers.filter(number => number < 501)

// console.log(numbersLower500.length)

/*
  03

  - Gere um novo array com cada um dos números abaixo elevados ao quadrado e exiba o novo array no console.
*/

const numbers = [5, 7, 3]

const squaredNumbers = numbers.map(number => number ** 2)

console.log(squaredNumbers)

/*
  04

  - Exiba no console uma lista dos nomes dos jogos do array abaixo;
  - A lista deve conter a formatação exemplificada do array abaixo, considerando inclusive o traço e o espaço antes de cada nome.

  Dica: Para quebrar linha, você pode usar dentro da string o caractere especial \n.
*/

const cart = [
  { name: 'Dark Souls III', price: 95.03 },
  { name: 'Shadow of the Tomb Raider', price: 101.19 },
  { name: 'Sekiro: Shadows Die Twice', price: 179.99 },
  { name: 'REsidente Evil 2', price: 119.90 },
  { name: 'Death Stranding', price: 149.99 }
]

const productList = cart.reduce((accumulator, product) => {
  
}, '')

