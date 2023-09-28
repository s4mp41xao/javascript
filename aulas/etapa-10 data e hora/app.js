const present = new Date()

console.log(present)

console.log('getHours:', present.getHours())
console.log('getMinutes:', present.getMinutes())
console.log('getSeconds:', present.getSeconds())
console.log('timestamp:', present.getTime())
console.log('toDateString:', present.toDateString())
console.log('toTimeString:', present.toTimeString())
console.log('toLocaleString:', present.toLocaleString())

const past = new Date('May 1 2020 7:47:00')

const difference = present.getTime() - past.getTime()
console.log(difference)

const seconds = Math.round(difference / 1000)
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

console.log(`Escrito há ${days} dias`)

const timestamp = 16756742342451
console.log(new Date(timestamp))