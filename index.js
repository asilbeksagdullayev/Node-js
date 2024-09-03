const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	if (req.method === 'GET') {  // Use req.method instead of res.method
		res.end(`
<h3>Send name</h3>
<form method="post" action="/">
<input type="text" name="Name" placeholder="Enter your name" />
<button type="submit">Send Name</button> <!-- Corrected type to 'submit' -->
</form>
	`);
	} else if (req.method === 'POST') {
		const name = [];
		req.on('data', (data) => {
			name.push(data);
		});
		req.on('end', () => {
			const message = Buffer.concat(name).toString().split('=')[1];
			res.end(`Name was successfully added: ${message}`);
		});
	}
});

server.listen(3000, () => {
	console.log('Server was successfully started!');
});
