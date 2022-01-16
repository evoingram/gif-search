const server = require('./API/server.js');

const port = process.env.PORT || 8080;

server.listen(port, () => {
	console.log(`\n<<< Server is running on port ${port} >>>\n`);
});
