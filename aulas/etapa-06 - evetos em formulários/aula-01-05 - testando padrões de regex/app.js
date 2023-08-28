const form = document.querySelector('.signup-form')
const usernameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
  event.preventDefault()

  console.log(event.target.username.value)
})

const username = 'samuel'
const pattern = /^[a-z]{6,}$/
const result = username.search(pattern)

console.log(result)
// const isAMatch = pattern.test(username)


// if (isAMatch){
//   console.log('O teste regex passou! =)')
// } else {
//   console.log('Regex não aprovado. =(')
// }