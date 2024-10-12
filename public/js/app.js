// Referências aos elementos HTML
const listaTarefas = document.getElementById('listaTarefas');
const formulario = document.getElementById('formularioTarefa');

// Função para carregar e exibir as tarefas cadastradas
function carregarTarefas() {
    fetch('http://localhost:3000/tarefas') // Requisição GET para buscar tarefas
        .then(response => response.json())
        .then(tarefas => {
            listaTarefas.innerHTML = ''; // Limpa a lista antes de renderizar
            tarefas.forEach(tarefa => {
                const divTarefa = document.createElement('div');
                divTarefa.className = 'tarefa'; // Classe para estilização
                divTarefa.textContent = tarefa.descricao; // Adiciona o texto da tarefa
                listaTarefas.appendChild(divTarefa);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar tarefas:', error);
            alert('Erro ao carregar tarefas.');
        });
}

// Evento para adicionar uma nova tarefa
formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o recarregamento da página

    const descricao = document.getElementById('descricaoTarefa').value.trim();

    if (descricao === '') {
        alert('Por favor, insira uma descrição para a tarefa.');
        return;
    }

    fetch('http://localhost:3000/tarefas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ descricao })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'sucesso') {
            document.getElementById('descricaoTarefa').value = ''; // Limpa o campo
            carregarTarefas(); // Atualiza a lista de tarefas
        } else {
            alert('Erro ao adicionar tarefa: ' + (data.mensagem || 'Desconhecido'));
        }
    })
    .catch(error => {
        console.error('Erro ao adicionar tarefa:', error);
        alert('Erro ao adicionar tarefa.');
    });
});

// Carrega as tarefas ao iniciar a aplicação
carregarTarefas();


