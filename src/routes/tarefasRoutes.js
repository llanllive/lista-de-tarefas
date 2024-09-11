const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

router.post('/', tarefasController.adicionarTarefa);

module.exports = router;
