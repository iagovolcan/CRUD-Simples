const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'usuariodopostgres',
    password: 'suasenha',
    host: 'localhost',
    database: 'crud'
});

exports.pool = pool;