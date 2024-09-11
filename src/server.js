const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/tarefas', tarefasRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

