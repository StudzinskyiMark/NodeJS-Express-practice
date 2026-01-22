const http = require('http');
const fs = require('fs');
const _lo = require('lodash');

const server = http.createServer((req, res) => {
	//lodash
	let num = _lo.random(0, 20);
	console.log(num);

	const hello = _lo.once(() => {
		console.log('hello');
	});

	hello();
	hello();

	//set header content type
	res.setHeader('Content-Type', 'text/html');
	// res.write('<h1>hello there</h1>');
	// res.write('<p>what`s up</p>');

	let path = './views/';
	switch (req.url) {
		case '/': {
			path += 'index.html';
			res.statusCode = 200;
			break;
		}
		case '/about': {
			path += 'about.html';
			res.statusCode = 200;
			break;
		}
		// redirect
		case '/about-me': {
			res.statusCode = 301;
			res.setHeader('Location', '/about');
			res.end();
			break;
		}
		default:
			path += '404.html';
			res.statusCode = 404;
			break;
	}

	// Send html file
	fs.readFile(path, (error, data) => {
		if (error) {
			console.log(error);
		} else {
			// res.write(data);

			res.end(data);
		}
	});
});

server.listen(3000, 'localhost', () => {
	console.log('listening for requests on port 3000');
});
