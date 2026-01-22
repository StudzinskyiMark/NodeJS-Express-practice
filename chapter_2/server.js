const PORT = 3000;
const express = require('express');
const app = express();

let data = ['Jone'];

//Middleware
app.use(express.json());

//Website endpoint
app.get('/', (req, res) => {
	res.send(`<h1>Home page</h1>
      <h2>Data:</h2>
         <p>${JSON.stringify(data)}</p>
      `);
});

app.get('/dashboard', (req, res) => {
	res.send('<h1>Dashboard page</h1>');
});

//API endpoint
app.get('/api/data', (req, res) => {
	res.send(data);
});

app.post('/api/data', (req, res) => {
	const newEntryData = req.body;
	console.log(newEntryData);
	data.push(newEntryData.name);
	res.sendStatus(201);
});

app.delete('/api/data', (req, res) => {
	data.pop();
	res.sendStatus(203);
});

app.listen(PORT, () => console.log(`Server has started at port:${PORT}`));
