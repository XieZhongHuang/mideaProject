var ApiResult = require('./ApiResult')

var mysql = require('mysql');

connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'delicious'
})
connection.connect();


module.exports = {

    repertory: function(condition, callback){
        connection.query(condition, function (error, results, fields) {
            if (error) throw error;
            callback(results);
            
        });
    },
    client: function(condition, callback){
        connection.query(condition, function (error, results, fields) {
            if (error) throw error;
            callback(results);
            
        });
    },
   
}