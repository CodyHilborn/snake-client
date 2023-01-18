const net = require('net');
const { IP, PORT } = require('./constants')


const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    conn.write('Name: CJH');
  });

  conn.on('data', () => {
    console.log('you ded cuz u idled');
  });

  conn.setEncoding('utf8');

  return conn;
};


// Module Exports

module.exports = {
  connect,
};