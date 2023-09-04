// const paragraph = document.querySelector('p')


// paragraph.innerText = "New Text"


// console.log(paragraph.innerText)

// const paragraph = document.querySelectorAll('p')

// paragraph.forEach((paragraph, index) => {
//   paragraph.innerText += ` Novo Texto ${index + 1}`
// })


const div = document.querySelector('.content')

const peoples = ['Tedy', 'Zequinha', 'Joca' ]

peoples.forEach(people => {
  div.innerHTML += `<p>${people}</p>`
})





