const net = require("net");
const { IP, PORT, encoding } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding(encoding);

  conn.on('data', (data) => {
    console.log(data);
  });
  

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: LEW');
  });

  return conn;
};


module.exports = {connect};