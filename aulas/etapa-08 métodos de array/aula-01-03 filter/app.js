// Obtendo números de um array que são maiores de 37.

const numbers = [5, 40, 50, 15]

const numbersGreaterThan37 = numbers.filter(item => item > 37)

console.log(numbersGreaterThan37)

// Gerando um novo array com os usuários de um array possui a conta premium.

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const usersPremium = users.filter(user => user.premium)

console.log(usersPremium)