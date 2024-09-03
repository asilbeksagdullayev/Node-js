const Events = require('events');

class Logger extends Events {
	bek(a, b, c) {
		this.emit('Result', a * b * c);
	}
}
const logger = new Logger();

logger.on('Result', (data) => {
	console.log(`Your result > ${data}`);
});

logger.bek(34, 15, 17);
