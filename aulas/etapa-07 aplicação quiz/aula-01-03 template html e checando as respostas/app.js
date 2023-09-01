const form = document.querySelector('.quiz-form')
const fiinalResult = document.querySelector('.result')

const correctAnswers = ['B', 'B', 'B', 'B']

form.addEventListener('submit', event => {
  event.preventDefault()

  let score = 0
  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  userAnswers.forEach((userAnswer, index) => {
    if (userAnswer === correctAnswers[index]) {
      score += 25
    }
  })

  scrollTo(0, 0)

  fiinalResult.querySelector('span').textContent = `${score}%`
  fiinalResult.classList.remove('d-none')

})

// setTimeout(() => {
//   alert('Executou!')
// }, 2000)