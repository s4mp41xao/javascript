// Objetos em arrays

// Armazenando objetos dentro de um array

// const posts = [
//   { title: 'Empadão de frango', likes: 30},
//   { title: '4 receitas de purê de batata', likes: 50}
// ]

// console.log(posts)

// let user = {
//   name: 'João',
//   age: 31,
//   email: 'joãocardoso@gmail.com',
//   city: 'São Paulo',
//   blogPosts: [
//     { title: 'Empadão de frango', likes: 30},
//     { title: '4 receitas de purê de batata', likes: 50}
//   ],
//   login () {
//     console.log(`Usuário logado.`)
//   },
//   logout () {
//     console.log(`Usuário deslogado.`)
//   },
//   logBlogPosts () {
//     console.log(`O usuário ${this.name} publicou os seguintes posts:`)

//     this.blogPosts.forEach(post => {
//       console.log(post)
//     })

//   }
// }

// user.logBlogPosts()


// Iterando sobre cada objeto do array com o método forEach()

let user = {
  
  name: 'João',

  blogPosts: [
    { title: 'Empadão de frango', likes: 30},
    { title: '4 receitas de purê de batata', likes: 50}
  ],

  logBlogPosts () {
    console.log(`O usuário ${this.name} publicou os seguintes posts:`)

    this.blogPosts.forEach(post => {
      console.log(post.title, post.likes)
    })
  }

}

user.logBlogPosts()