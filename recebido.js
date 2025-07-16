const atualizarFila = () => {
    const filaDiv = document.getElementById('fila')
    let fila = JSON.parse(localStorage.getItem('fila')) || []
  
    filaDiv.innerHTML = fila.map((item, i) => `
      <div class="fila-item">
        <strong>${i + 1}. ${item.nome}</strong> - ${item.motivo}
        <p>Status: ${item.status}</p>
        ${item.status === 'Aguardando aprovação' ? `
          <div class="fila-buttons">
            <button class="btn-aceitar" onclick="autorizar(${i})">✅ Autorizar</button>
            <button class="btn-recusar" onclick="recusar(${i})">❌ Recusar</button>
          </div>
        ` : ''}
      </div>
    `).join('')
  }
  
  const alterarStatus = (index, novoStatus) => {
    let fila = JSON.parse(localStorage.getItem('fila')) || []
    fila[index].status = novoStatus
    localStorage.setItem('fila', JSON.stringify(fila))
    atualizarFila()
    alert(`Saída de ${fila[index].nome} ${novoStatus.toLowerCase()}.`)
  }
  
  const autorizar = (i) => alterarStatus(i, 'Autorizado ✅')
  const recusar = (i) => alterarStatus(i, 'Recusado ❌')
  
  const limparFinalizados = () => {
    let fila = JSON.parse(localStorage.getItem('fila')) || []
    fila = fila.filter(item => item.status === 'Aguardando aprovação')
    localStorage.setItem('fila', JSON.stringify(fila))
    atualizarFila()
    alert('Lista limpa.')
  }
  
  document.addEventListener('DOMContentLoaded', atualizarFila)