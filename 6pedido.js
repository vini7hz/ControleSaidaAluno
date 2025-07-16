document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('adicionar').addEventListener('click', () => {
      const nome = document.getElementById('nome').value.trim()
      const motivo = document.getElementById('motivo').value.trim()
  
      const fila = JSON.parse(localStorage.getItem('fila')) || []
      fila.push({ nome, motivo, status: 'Aguardando aprovação' })
      localStorage.setItem('fila', JSON.stringify(fila))
  
      alert('Solicitação enviada!')
      document.getElementById('nome').value = ''
      document.getElementById('motivo').value = ''
    })
  })