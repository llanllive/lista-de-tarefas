const db = require('../config/db');

exports.adicionarTarefa = (descricao) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO tarefas (descricao) VALUES (?)';
        db.query(query, [descricao], (err, result) => {
            if (err) return reject(err);
            resolve(result);
        });
    });
};

// Nova função para listar todas as tarefas
exports.listarTarefas = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM tarefas';
        db.query(query, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
};
