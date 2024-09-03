const http = require('http');

const server = http.createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	if (res.method === 'GET') {
		res.end(`
<h3>Send name</h3>
<form method="post" action="/">
<input type="name" name="Name" placeholder="Enter your name " />
<button type="text">Send Name</button>
</form>
  `);
	} else if (res.method === 'POST') {
		const name = [];
		req.on('data', (data) => {
			name.push(Buffer.from(data));
		});
		req.on('end', () => {
			const message = name.toString().split('=')[1];
			res.end(`Name was success added : ${message}`);
		});
	}
});
server.listen(3000, () => {
	console.log('Server was success started !');
});
