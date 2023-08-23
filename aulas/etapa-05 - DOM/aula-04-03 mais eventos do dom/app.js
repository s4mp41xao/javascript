const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
  console.log('Texto copiado!')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', event => {
  box.textContent = `X: ${event.offsetX} | X: ${event.offsetY}`
  
})

document.addEventListener('wheel', event => {
  console.log(event.pageX, event.pageY)
})