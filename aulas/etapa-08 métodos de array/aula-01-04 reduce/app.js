// const numbers = [10, 20, 30]
// 9
// const sumResult = array.reduce((accumlator, item) => accumlator + item)

// console.log(sumResult)

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const scoreResults = phaseScores.reduce((accumulator, scoreResult) => {
  if (scoreResult.name === "Roger Melo") {
    accumulator += scoreResult.score
  }
  return accumulator
}, 0)

console.log(scoreResults)