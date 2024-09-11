document.getElementById('formularioTarefa').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const descricao = document.getElementById('descricaoTarefa').value.trim();

    if (descricao === '') {
        alert('Por favor, insira uma descrição para a tarefa.');
        return;
    }

   
    fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ descricao })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'sucesso') {
            document.getElementById('descricaoTarefa').value = '';
            alert('Tarefa adicionada com sucesso!');
        } else {
            alert('Erro ao adicionar tarefa: ' + (data.mensagem || 'Desconhecido'));
        }
    })
    .catch(error => {
        console.error('Erro ao adicionar tarefa:', error);
        alert('Erro ao adicionar tarefa.');
    });
});
