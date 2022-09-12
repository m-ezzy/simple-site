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

app.get("/get_chat_list", (req, res) => {
	var get_chat_list = require('./nodejs/get_chat_list');
	var json = get_chat_list.result_g();

	res.contentType('text/json');
	res.send(json);
});

server.listen(port, () => {
	console.log(`listening on: ${port}`);
}
