const mysql = require ('mysql2');
//import mysql from 'mysql2'

require('dotenv').config();

//Configuración
const mysqlConn = mysql.createConnection({
    
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

//Conexión
mysqlConn.connect( (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión a DB MYSQL exitosa');
    }
});

//Exportación
module.exports = mysqlConn;