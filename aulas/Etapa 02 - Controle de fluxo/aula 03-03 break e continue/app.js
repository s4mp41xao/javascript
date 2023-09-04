const score = [50, 25, 0, 30, 100, 20, 10]

for (let i = 0; i < score.length; i++) {
  if (score[i] === 0) {
    continue
  }
  
  console.log(`Sua pontuação ${score[i]}`)

  if (score[i] === 100) {
    console.log('Parabéns você atingiu a pontuação máxima!')

    break
  }
}