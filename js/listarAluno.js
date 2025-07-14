let btnListar = document.getElementById('listarAluno')
let res = document.getElementById('res')

btnListar.addEventListener('click', () => {
  fetch(`http://localhost:8081/aluno`)
    .then(response => response.json())
    .then(dados => {
      res.innerHTML = '' 
      
      dados.forEach(e => {
        res.innerHTML += `
          <strong>ID:</strong> ${e.codAluno}<br>
          <strong>Nome:</strong> ${e.nome}<br>
          <strong>Sobrenome:</strong> ${e.sobrenome}<br>
          <strong>Email:</strong> ${e.email}<br>
          <strong>Telefone:</strong> ${e.telefone}<br>
          <strong>Matrícula:</strong> ${e.matricula}<br><br>
                   <hr>
        `
      })
    })
    .catch((err) => {
      console.error('Erro ao buscar Alunos!!!', err)
      res.innerHTML = 'Erro ao buscar Alunos.'
    })
})
