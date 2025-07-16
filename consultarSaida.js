let id = document.getElementById("IdAluno")
let btn = document.getElementById("consultarAluno")
let res = document.getElementById("res")

btn.addEventListener("click", () => {
  if (!id.value) {
    res.innerHTML = `<p style="color:red;">Informe um ID</p>`
    return
  }

  fetch(`http://localhost:8081/saida/${id.value}`)
    .then(r => {
      if (!r.ok) throw new Error("Saida não encontrado")
      return r.json()
    })
    .then(d => {
      res.innerHTML = `
        <p>
          <strong>Id:</strong> ${d.codSaida}<br>
          <strong>Data Solicitação:</strong> ${d.dataSolicitacao}<br>
          <strong>Hora Saida:</strong> ${d.horaSaida}<br>
          <strong>Hora Retorno:</strong> ${d.horaRetorno}<br>
          <strong>Motivo:</strong> ${d.motivo}<br>
          <strong>Local Destino:</strong> ${d.localDestino}<br>
          <strong>Satus:</strong> ${d.status}<br>
          <strong>Nome do Aluno:</strong> ${d.nomeAluno}<br>
          <strong>Nome do Professor:</strong> ${d.nomeProfessor}<br>
        </p><br>
      `
    })
    .catch(err => {
      res.innerHTML = `<p style="color:red;">${err.message}</p>`
    })
})