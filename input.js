const { connect } = require('./client');
let connection;

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } if (key === 'w') {
    connection.write('Move: up');
  } if (key === 'a') {
    connection.write('Move: left');
  } if (key === 's') {
    connection.write('Move: down');
  } if (key === 'd') {
    connection.write('Move: right');
  } if (key === '1') {
    connection.write('Say: om nom nom');
  } if (key === '2') {
    connection.write('Say: Please don\'t eat me!');
  } if (key === '3') {
    connection.write('Say: Game Over!');
  }
};

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
};


module.exports = { setupInput };