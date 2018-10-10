// src/api.js
const express = require("express");
const app = express();
const greeting = require("./greeting");

app.get("/greeting/:name", (req, res) => {
	res.status(200).send({greeting: greeting(req.params.name)})
	return res;
});

module.exports = app;