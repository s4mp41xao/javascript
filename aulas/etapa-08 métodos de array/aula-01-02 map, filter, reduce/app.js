//  Obtendo os itens de um array multiplicado por 2. Usando apenas o item como parâmetro em uma arrow function.

// const numbers = [1, 2, 3]

// const doubleNumbers = numbers.map(item => item * 2)

// console.log(doubleNumbers)

// Criando um novo array de itens com preços pela metade.

// const prices = [20, 10, 30, 40, 5]

// const salesPrice = prices.map(price => price / 2)

// console.log(salesPrice)

// Criando um novo array de itens com preços pela metade se o preço do objeto for mais ou igual a 30.

const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const salesProducts = products.map(product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 }
  }
  return product
})

// console.log(salesProducts)