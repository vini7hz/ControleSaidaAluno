let btnCadastroAluno = document.getElementById("cadastroAluno");
let res = document.getElementById("res");

btnCadastroAluno.addEventListener("click", () => {
  let dataSolicitacao = document.getElementById("dataSolicitacao").value
  let horaSaida = document.getElementById("horaSaida").value
  let horaRetorno = document.getElementById("horaRetorno").value
  let motivo = document.getElementById("motivo").value
  let localDestino = document.getElementById("localDestino").value
  let status = document.getElementById("status").value
  let nomeAluno = document.getElementById("nomeAluno").value
  let nomeProfessor = document.getElementById("nomeProfessor").value
  let aluno_cod = document.getElementById("aluno_cod").value
  let professor_cod = document.getElementById("professor_cod").value

  let saida = {
    dataSolicitacao,
    horaSaida,
    horaRetorno,
    motivo,
    localDestino,
    status,
    nomeAluno,
    nomeProfessor,
    aluno_cod,
    professor_cod
  };

  fetch("http://localhost:8081/saida", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(saida)
  })
    .then(resp => {
      if (!resp.ok) throw new Error("Erro ao cadastrar saída")
      return resp.json();
    })
    .then(data => {

      res.innerHTML = `
        <p style="color:green;">
          Saída cadastrada com sucesso!<br>
          <strong>ID:</strong> ${data.codSaida}<br>
          <strong>Data:</strong> ${data.dataSolicitacao}<br>
          <strong>Saída:</strong> ${data.horaSaida}<br>
          <strong>Retorno:</strong> ${data.horaRetorno}<br>
          <strong>Motivo:</strong> ${data.motivo}<br>
          <strong>Destino:</strong> ${data.localDestino}<br>
          <strong>Status:</strong> ${data.status}<br>
          <strong>Aluno:</strong> ${data.nomeAluno}<br>
          <strong>Professor:</strong> ${data.nomeProfessor}<br>
        </p>
      `;

      document.querySelectorAll("input").forEach(input => input.value = "")
    })
    .catch(error => {
      console.error(error);
      res.innerHTML = `<p style="color:red;">Erro ao cadastrar saída.</p>`
    });
});
