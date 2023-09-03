/*
Este exercício será um pouquinho diferente dos anteriores.

Seu desafio é desenvolver uma versão do quiz que:

- Aborda um tema diferente (não pode ser de filmes);
- Tem um tema de cores diferente do que foi apresentado na aula;
- Exibe na tela a pontuação que o usuário fez. Não há certo ou errado, apenas faça. Essa exibição de pontos é uma das implementações que faremos na próxima aula =D

Independente se você já fez o quiz dos filmes enquanto acompanhava a aula, busque fazer esse exercício sem rever partes da aula.

É importante que a sua versão do quiz seja feita apenas com o conteúdo que vimos até aqui.
*/


const form = document.querySelector('.person-form')
const p = document.createElement('h2')
const scoreText = document.querySelector('.score-container')
const scoreResult = document.querySelector('span')

const correctAnswers = ['paris', 'jupiter', 'o', 'elefante']

let score = 0

form.addEventListener('submit', event =>  {
  event.preventDefault()

  const userAnswers = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ]

  userAnswers.forEach((userAnswer, index) => {
    if(userAnswer === correctAnswers[index]){
      score += 25
      console.log(`Correto! Você ganhou 25 pontos por acertar a resposta: ${correctAnswers[index]}`)
    }
  })

  console.log(scoreText.classList.remove('d-none'))  
  scoreResult.textContent = score

  scrollTo(top )
})
