import { createConnection } from "mysql2";

const connection = createConnection({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    port: 25760,
    password: "RuXnKeyytJqWvgyJCPOFsWqcShahoHyZ",
    database: "railway"
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.stack);
        return;
    }

    console.log('Conexão bem-sucedida ao banco de dados.');

    connection.query(`SHOW TABLES`, (err, result, fields) => {
        if (err) {
            console.error('Erro ao executar consulta:', err.stack);
            return;
        }

        console.log("Tabelas no banco de dados:");
        result.forEach(row => {
            console.log(row.Tables_in_railway);
        });

        connection.end(); // Fechar a conexão após a consulta
    });
});

export default connection;