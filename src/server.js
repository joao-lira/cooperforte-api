const http = require('http')
const app = require('./app')

//Use system configuration for port or use 6001 by default.
//const port = process.env.port || 3000;
const port = process.env.PORT || 3000

//Create server with exported express app
const server = http.createServer(app)
server.listen(port)
