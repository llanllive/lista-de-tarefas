const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tarefasRoutes = require('./routes/tarefasRoutes'); // Importa rotas de tarefas

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors()); // Permitir requisições de outros domínios
app.use(bodyParser.json()); // Parse de JSON no corpo das requisições

// Rotas
app.use('/tarefas', tarefasRoutes); // Usa as rotas de tarefas

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

  

