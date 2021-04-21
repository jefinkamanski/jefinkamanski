const mysql = require('mysql')
const conexao = mysql.createConnection({
    host: 'localhost',
    port: 3333,
    user: 'root',
    password: 'admin',
    database: 'meuAP'
})

module.exports = conexao