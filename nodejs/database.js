var mysql = require('mysql');
var util = require('util');

/*
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "skyland",
});*/

var con = mysql.createConnection({
	host: "skyland-362206:us-central1:mysql-db-1",
	//host: "35.184.85.39",
	//host: "https://skyland-362206.el.r.appspot.com/",
	/*user: "root",
	password: "]uel{GT:&#&E~f}d",*/
	user: "admin1",
	password: "r^hx81{F-%75&Naa",
	database: "simple-site",
});

con.query = util.promisify(con.query).bind(con);

con.connect();
/*
con.connect((err) => {
	if (err) throw err;
	console.log("mysql database connected!");
});*/

exports.con = con;
