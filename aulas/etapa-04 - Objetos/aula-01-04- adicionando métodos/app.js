// Adicionando métodos

let user = {
  name: 'João',
  age: 31,
  email: 'joãocardoso@gmail.com',
  city: 'São Paulo',
  blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
  login: function () {
    console.log('Usuário logado!')
  },
  logout: function () {
    console.log('Usuário deslogado!')
  }
}

user.login()

user.logout()