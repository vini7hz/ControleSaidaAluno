let res = document.getElementById('res')
let btnDeletar = document.getElementById('deletarAluno')

btnDeletar.addEventListener('click', (e) => {
  e.preventDefault()
  let cod = document.getElementById('IdSaida').value
  if (!cod) {
    alert('Informe um ID válido para deletar')
    return
  }
  fetch(`http://localhost:8081/saida/${cod}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (response.ok) {
        res.innerHTML = `Saida com ID ${cod} deletado com sucesso`
      } else {
        return response.json().then(errBody => {
        throw new Error(errBody.message || response.statusText)
        })
      }
    })
    .catch(err => {
      console.error('Erro ao deletar o saida', err)
      res.innerHTML = `Falha ao deletar o saida: ${err.message}`
    })
})