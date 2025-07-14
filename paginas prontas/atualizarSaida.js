let id = document.getElementById("IdSaida")
let dataSolicitacao = document.getElementById("dataSolicitacao")
let horaSaida = document.getElementById("horaSaida")
let horaRetorno = document.getElementById("horaRetorno")
let motivo = document.getElementById("motivo")
let localDestino = document.getElementById("localDestino")
let statusSaida = document.getElementById("statusSaida")
let nomeAluno = document.getElementById("nomeAluno")
let nomeProfessor = document.getElementById("nomeProfessor")
let aluno_cod = document.getElementById("aluno_cod")
let professor_cod = document.getElementById("professor_cod")
let res = document.getElementById("res")

id.addEventListener("change", () => {
  fetch(`http://localhost:8081/saida/${id.value}`)
    .then(r => {
      if (!r.ok) throw new Error("Saída não encontrada")
      return r.json()
    })
    .then(d => {
      dataSolicitacao.value = d.dataSolicitacao || ""
      horaSaida.value = d.horaSaida || ""
      horaRetorno.value = d.horaRetorno || ""
      motivo.value = d.motivo || ""
      localDestino.value = d.localDestino || ""
      statusSaida.value = d.status || ""
      nomeAluno.value = d.nomeAluno || ""
      nomeProfessor.value = d.nomeProfessor || ""

      aluno_cod.value = d.aluno?.codAluno || d.aluno?.id || ""
      professor_cod.value = d.professor?.codProfessor || d.professor?.id || ""

      id.disabled = true
      res.innerHTML = ""
    })
    .catch(() => {
      res.innerHTML = `Erro ao buscar Saída<br>`
    })
})

document.getElementById("atualizarSaida").addEventListener("click", () => {
  let saida = {
    dataSolicitacao: dataSolicitacao.value,
    horaSaida: horaSaida.value,
    horaRetorno: horaRetorno.value,
    motivo: motivo.value,
    localDestino: localDestino.value,
    status: statusSaida.value,
    nomeAluno: nomeAluno.value,
    nomeProfessor: nomeProfessor.value,
    aluno_cod: Number(aluno_cod.value),
    professor_cod: Number(professor_cod.value)
  }

  fetch(`http://localhost:8081/saida/${id.value}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(saida)
  })
    .then(r => {
      if (!r.ok) throw new Error("Erro ao atualizar saída")
      return r.json()
    })
    .then(d => {
      res.innerHTML = `Saída ID ${d.codSaida || d.id} atualizada com sucesso<br>`
      dataSolicitacao.value = ""
      horaSaida.value = ""
      horaRetorno.value = ""
      motivo.value = ""
      localDestino.value = ""
      statusSaida.value = ""
      nomeAluno.value = ""
      nomeProfessor.value = ""
      aluno_cod.value = ""
      professor_cod.value = ""
      id.value = ""
      id.disabled = false
    })
    .catch(() => {
      res.innerHTML = `Erro ao atualizar Saída<br>`
    })
})
