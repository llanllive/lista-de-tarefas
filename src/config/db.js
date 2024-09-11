const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port:3306,
    user: 'root',
    password: '24Naruto24?',
    database: 'lista_de_tarefas'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        process.exit(1);
    }
    console.log('Conectado ao banco de dados MySQL');
});

module.exports = connection;
