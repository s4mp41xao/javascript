const names = ['Christian', 'Alfredo', 'Edson']

names.sort()

const scores = [10, 50, 20, 5, 35, 70, 45]

scores.sort((score1, score2) => score2 - score1)

debugger

const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

theBigFamily.sort((item1, item2) => item2.score - item1.score)

theBigFamily
debugger