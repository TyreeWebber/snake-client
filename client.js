const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    conn.write('Name: TY');
/*
    setInterval(() => {
      conn.write("Move: up");
    }, 50);
*/
  })
  conn.on("data", (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };