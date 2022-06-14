const mysql = require('mysql');

module.exports = () =>{
    return mysql.createConnection({
        host:'localhost',
        user:'arturo',
        password: 'osomuerto',
        database: 'new_portal'
    });
};