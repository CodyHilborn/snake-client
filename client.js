const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
    conn.write('Name: CJH');
    // EXPERIMENTING WITH CONSECUTIVE COMMANDS
    // conn.write('Move: up');
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 1000);
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