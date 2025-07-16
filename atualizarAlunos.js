  let id = document.getElementById("IdAluno")
  let nome = document.getElementById("nmAluno")
  let sobrenome = document.getElementById("sobrenomeAluno")
  let matricula = document.getElementById("matriculaAluno")
  let telefone = document.getElementById("telefoneAluno")
  let email = document.getElementById("emailAluno")
  let res = document.getElementById("res")

  id.addEventListener("change", () => {
    fetch(`http://localhost:8081/aluno/${id.value}`)
      .then(r => r.json())
      .then(d => {
        nome.value = d.nome
        sobrenome.value = d.sobrenome
        matricula.value = d.matricula
        telefone.value = d.telefone
        email.value = d.email
        id.disabled = true
      })
      .catch(() => {
        res.innerHTML = `Erro ao buscar aluno<br>`
      })
  })

  document.getElementById("atualizarAluno").addEventListener("click", () => {
    let aluno = {
      nome: nome.value,
      sobrenome: sobrenome.value,
      matricula: +matricula.value,
      telefone: telefone.value,
      email: email.value
    }

    fetch(`http://localhost:8081/aluno/${id.value}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno)
    })
      .then(r => r.json())
      .then(d => {
        res.innerHTML = `Aluno ${d.nome} atualizado com sucesso<br>`
        nome.value = ""
        sobrenome.value = ""
        matricula.value = ""
        telefone.value = ""
        email.value = ""
        id.value = ""
        id.disabled = false
      })
      .catch(() => {
        res.innerHTML = `Erro ao atualizar aluno<br>`
      })
  })