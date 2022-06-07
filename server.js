const http  = require("http");


// DatabaseConnection
const getDBConnection = require("./confiq/db");

getDBConnection();

const port = 3000;


const app = require('./app');
const server = http.createServer(app);
server.listen(port);
