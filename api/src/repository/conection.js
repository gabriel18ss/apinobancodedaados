import mysql from 'mysql2/promise'

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    users: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    dataBase: process.env.MYSQL_DB
})

export { con }