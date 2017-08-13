var mysql = require('mysql')
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'shoppingcart-js'
});

connection.connect()
console.log('Connection done have to insert query');
connection.query('CREATE TABLE xxxno( id int,' +
    'ProductName varchar(255),' +
    ' imagePath varchar(255),' +
    ' price int)', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()