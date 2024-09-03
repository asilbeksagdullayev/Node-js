const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname, 'notes', 'december.txt'), 'Create new course NodeJs', (err) => {
	if (err) throw new Error();

	console.log('File was created successfully');

	fs.appendFile(
		path.join(__dirname, 'notes', 'december.txt'),
		'and micro other elements',
		(err) => {
			if (err) throw new Error();

			console.log('File was changed successfully');
		}
	);
});

fs.readFile(path.join(__dirname, 'notes', 'december.txt'), (err, data) => {
	if (err) throw new Error();

	console.log(Buffer.from(data).toString());
});
