const { MOVE_UP_KEY, MOVE_LEFT_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MESSAGES } = require('./constants');

// setup interface to handle user input from stdin.

let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // EVENT LISTENER
  stdin.on('data', handleUserInput);

  return stdin;
};


const handleUserInput = function(key) {
  // TERMINAL ESCAPE KEY:
  if (key === '\u0003') {
    process.exit();
  }

  // MOVE CONTROL KEYS:
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }

  // CANNED MESSAGES:
  if (MESSAGES[key]) {
    connection.write(`Say: ${MESSAGES[key]}`)
  }

};

module.exports = {
  setupInput,
};