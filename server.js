const express = require("express");
const http = require('http');
const path = require('path');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || "8000";

app.use(express.static(path.join(__dirname, 'public')));

/*
app.get("/", (request, response) => {
	response.contentType('text/html');
	response.sendFile(`${__dirname}/index.html`);
});*/

app.get("/get_chat_list", async (req, res) => {
	var db = require('./database.js');

	var sql = 'SELECT * from chats';
	let rows = await db.con.query(sql);
	
	res.contentType('text/json');
	res.send(JSON.parse(JSON.stringify(rows)));
});
server.listen(port, () => {
	console.log(`listening on: ${port}`);
});
