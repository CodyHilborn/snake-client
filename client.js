const net = require('net');


const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541,
  });

  conn.on('data', () => {
    console.log('you ded cuz u idled');
  });

  conn.setEncoding('utf8');

  return conn;
};

console.log('Connecting ...');

// connect();

module.exports = {
  connect,
}