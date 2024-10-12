
const tarefaModel = require('../models/tarefaModel');

exports.listarTarefas = (req, res) => {
    tarefaModel.listarTarefas()
        .then(tarefas => res.json(tarefas))
        .catch(err => {
            console.error('Erro ao listar tarefas:', err);
            res.status(500).json({ status: 'erro', mensagem: 'Erro ao listar tarefas.' });
        });
};

exports.adicionarTarefa = (req, res) => {
    const { descricao } = req.body;

    if (!descricao) {
        return res.status(400).json({ status: 'erro', mensagem: 'Descrição da tarefa é obrigatória.' });
    }

    tarefaModel.adicionarTarefa(descricao)
        .then(result => res.status(201).json({ status: 'sucesso', id: result.insertId }))
        .catch(err => {
            console.error('Erro ao adicionar tarefa:', err);
            res.status(500).json({ status: 'erro', mensagem: 'Erro ao adicionar tarefa.' });
        });
};

