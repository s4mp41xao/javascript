// const double = function (number) {
//   const doubleResult = number * 2
//   console.log(doubleResult)
// }

// double(3)

// const double = function (number) {
//   return number * 2
// }

const double = number => number * 2

const result = double(3)

const showResult = function (value) {
  return `O resultado é: ${value}`
}

console.log(showResult(result))