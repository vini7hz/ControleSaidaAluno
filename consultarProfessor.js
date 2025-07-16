let res = document.getElementById("res")
let btnConsultar = document.getElementById("consultarAluno")

btnConsultar.addEventListener("click", () => {
  let cod = document.getElementById("IdAluno").value

  if (!cod) {
    res.innerHTML = `<p style="color:red;">Informe um ID</p>`
    return
  }

  fetch(`http://localhost:8081/professor/${cod}`)
    .then(response => {
      if (!response.ok) throw new Error("Professor não encontrado")
      return response.json()
    })
    .then(d => {
      res.innerHTML = `
        <p>
          <strong>ID:</strong> ${d.codProfessor}<br>
          <strong>Nome:</strong> ${d.nome}<br>
          <strong>Sobrenome:</strong> ${d.sobrenome}<br>
          <strong>Matrícula:</strong> ${d.matricula}<br>
          <strong>Telefone:</strong> ${d.telefone}<br>
          <strong>Email:</strong> ${d.email}
        </p>
      `
    })
    .catch(err => {
      console.error("Erro ao consultar professor", err)
      res.innerHTML = `<p style="color:red;">${err.message}</p>`
    })
})
