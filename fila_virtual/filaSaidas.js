let btnListar = document.getElementById("listarAluno");
let res = document.getElementById("res");

btnListar.addEventListener("click", () => {
  fetch("http://localhost:8081/saida")
    .then(response => {
      if (!response.ok) throw new Error("Erro ao buscar saídas");
      return response.json();
    })
    .then(saidas => {
      if (saidas.length === 0) {
        res.innerHTML = "<p>Nenhuma saída encontrada.</p>";
        return;
      }

      console.log("Saídas recebidas:", saidas);

      let html = "";

      saidas.forEach(saida => {
        html += `
          <p>
            <strong>ID:</strong> ${saida.codSaida}<br>
            <strong>Aluno:</strong> ${saida.nomeAluno}<br>
            <strong>Professor:</strong> ${saida.nomeProfessor}<br>
            <strong>Motivo:</strong> ${saida.motivo}<br>
            <strong>Destino:</strong> ${saida.localDestino}<br>
            <strong>Data:</strong> ${saida.dataSolicitacao}<br>
            <strong>Horário Saida:</strong> ${saida.horaSaida}<br>
            <strong>Horário Retorno:</strong> ${saida.horaRetorno}
          </p>
          <hr>
        `;
      });

      res.innerHTML = html;
    })
    .catch(error => {
      res.innerHTML = `<p style="color:red;">Erro: ${error.message}</p>`;
    });
});
