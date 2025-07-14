
let btnCadastroAluno = document.getElementById("cadastroAluno")
let res = document.getElementById("res")

btnCadastroAluno.addEventListener("click", () => {

  let nome = document.getElementById("nmAluno").value
  let sobrenome = document.getElementById("sobrenomeAluno").value
  let matricula = document.getElementById("matriculaAluno").value
  let telefone = document.getElementById("telefoneAluno").value
  let email = document.getElementById("emailAluno").value
 
  let aluno = {
    nome: nome,
    sobrenome: sobrenome,
    matricula: matricula,
    telefone: telefone,
    email: email
  }

  fetch("http://localhost:8081/professor", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(aluno)
  })
    .then(resposta => resposta.json())
    .then(data => {
      res.innerHTML = `
        <p>
          Professor "${data.nome} ${data.sobrenome}" cadastrado com sucesso!<br>
          Matrícula: ${data.matricula}<br>
          Telefone: ${data.telefone}<br>
          Email: ${data.email}
        </p>
      `
      document.getElementById("nmAluno").value = ""
      document.getElementById("sobrenomeAluno").value = ""
      document.getElementById("matriculaAluno").value = ""
      document.getElementById("telefoneAluno").value = ""
      document.getElementById("emailAluno").value = ""
    })
    .catch(error => {
      console.error("Erro ao cadastrar aluno:", error)
  
    })
})

