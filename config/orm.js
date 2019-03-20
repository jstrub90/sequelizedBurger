var connection = require('./connection.js');

var orm = {
    // selecting all burgers in db
    selectAll: (table, cb) => {
        var query ="SELECT * FROM ?? ORDER BY id ASC";
        connection.query(query, table, function(error, data) {
            if(error) throw error;
            cb(data);
        });
    },
    // creating new burger
    insertOne: (table, col, val, cb) => {
        var query = "INSERT INTO ??(??) VALUES(?)";
        connection.query(query, [table, col, val], function(error, data) {
            if(error) throw error;
            cb(data);
        });
    },
    // setting devoured to true
    updateOne: (table, id, cb) => {
        var query = "UPDATE ?? SET devoured = true WHERE id = ?";
        connection.query(query, [table, id], function(error, data) {
            if(error) throw error;
            cb(data);
        });
    }
}

module.exports=orm;