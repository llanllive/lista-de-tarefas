const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// Rota para buscar todas as tarefas
router.get('/', tarefasController.listarTarefas); // Adiciona a rota para listar tarefas

// Rota para adicionar uma nova tarefa
router.post('/', tarefasController.adicionarTarefa);

// Rota de exclusão de tarefa
router.delete('/:id', tarefasController.excluirTarefa); 


module.exports = router;

