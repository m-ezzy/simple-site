var db = require('./database.js');

var result_g;

var sql = 'SELECT * from chats';

db.con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
    result_g = result;
});

exports.result_g = function() {
    return result_g;
};

