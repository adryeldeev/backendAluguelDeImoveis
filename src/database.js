const {createPool} = require('mysql2')

const pool = createPool({
    host:"viaduct.proxy.rlwy.net",
    user:"root",
    port:25760,
    password:"RuXnKeyytJqWvgyJCPOFsWqcShahoHyZ",
    database:"railway",
    
})

pool.getConnection((err, connection)=>{
    if(err){
        console.log( 'Erro ao  conectar ao banco de dados'+ err.stack)
        return err
    }
    console.log('Conexão bem sucedida, ID da conexão: ' + connection.threadId)
    connection.release()
})




export default pool