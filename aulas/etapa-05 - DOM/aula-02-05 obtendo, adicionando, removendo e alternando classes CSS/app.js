// const paragraph = document.querySelector('p')

// console.log(paragraph.classList)

// paragraph.classList.add('error')
// paragraph.classList.remove('error')

// console.log(paragraph.classList)

const paragraphs= document.querySelectorAll('p')

paragraphs.forEach(paragraph => {

  if (paragraph.textContent.includes('error')) {
    paragraph.classList.add('error')
  }

  if (paragraph.textContent.includes('sucess')) {
    paragraph.classList.add('sucess')
  }

})


// console.log(paragraph.innerText.includes('error'))

// console.log(paragraphs)

const title = document.querySelector('h1')
 
title.classList.toggle('title')
// title.classList.toggle('test')



console.log(title)

