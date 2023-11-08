const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/api', async (req, res) => {
	const name = req.query.name;
	console.log(name);
	res.send(`Hello ${name}!`);
});

app.get('/name', (req, res) => {});

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
