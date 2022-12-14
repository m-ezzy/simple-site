const express = require("express");
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || "8080";

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get("/", (request, response) => {
	response.contentType('text/html');
	response.sendFile(`${__dirname}/index.html`);
});*/

app.get("/chats", async (req, res) => {
	var db = require('./nodejs/database.js');

	var query = 'SELECT * from chats';
	let rows = await db.query(query).catch(err => { throw err });

	res.contentType('text/json');
	res.send(JSON.parse(JSON.stringify(rows)));
	//res.send({'key': 'hhhhhhhhhhhhhhhhhhhhh'});
});
server.listen(port, () => {
	console.log(`listening on: ${port}`);
});
