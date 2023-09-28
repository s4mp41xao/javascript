/*
  01

  - Exiba no console o index da 1ª (e única) ocorrência do mês "Fevereiro" do 
    array "months".
*/

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const indexOfMonth = months.indexOf('Fevereiro')
console.log(indexOfMonth)

/*
  02

  - Crie um objeto de data que represente o momento presente;
  - Exiba o objeto no console.
*/

const present = new Date()

console.log(present)

/*
  03

  - Baseado no objeto que você acabou de criar, exiba o ano atual no console.
*/

const currentYear = present.getFullYear()
console.log({ currentYear })

/*
  04

  - Crie um objeto de data que represente um momento passado;
  - Exiba o objeto no console.
*/

const past = new Date('Sep 27 2023 16:30:00')
console.log(past)

/*
  05

  - Exiba, no console, a hora do objeto que você acabou de criar.
*/

// const yesterdayHours = past.toTimeString()
const yesterdayHours = past.getHours()
console.log(yesterdayHours)

/*
  06

  - Crie um objeto de data que represente um momento futuro;
  - Exiba o objeto no console.
*/

const futureDay = new Date('Sep 29 2023 13:00:00')
console.log({ futureDay })

/*
  07

  - Exiba no console a quantidade de dias entre o momento futuro e o passado.
*/

// const differenceDays = futureDay.getDay() - past.getDay()

const days = futureDay.getTime() - past.getTime()
const differenceInDays = Math.round(days / 1000 / 60 / 60 / 24)
console.log({ differenceInDays })

/*
  08
  
  Assim como a 1ª aplicação que implementamos (Quiz), considere fazer 
  da aplicação To-do List uma peça do seu portfólio.

  Desenvolva a sua versão do To-do List e, se você sentir que a desenvolveu 
  por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  Você pode hospedá-la no Netlify seguindo o mesmo tutorial que recomendei na 
  aplicação do Quiz: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/