const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
  popup.style.display = 'block'
})

popup.addEventListener('click', event => {
  const classNameOfClickedElements = event.target.className
  const classNames = ['popup-close', 'popup-wrapper', 'popup-link']
  const shouldPopClose = classNames.some(className => className === classNameOfClickedElements)

  if (shouldPopClose) {
    popup.style.display = 'none'
  }

})