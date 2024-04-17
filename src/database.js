import { createPool } from "mysql2";

const pool = createPool({
    host:"viaduct.proxy.rlwy.net",
    user:"root",
    port:25760,
    password:"RuXnKeyytJqWvgyJCPOFsWqcShahoHyZ",
    database:"railway",
    connectionLimit:10
    
})

pool.query(`SHOW TABLES`, (err, result, fields) => {
    if (err) {
        return console.log(err);
    }
    console.log("Tabelas no banco de dados:");
    result.forEach(row => {
        console.log(row.Tables_in_railway);
    });
});



export default pool