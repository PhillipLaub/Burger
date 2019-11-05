// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL) {
  console.log(process.env.JAWSDB_URL)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "kzq105p31vc4etu3",
    password: "qqggsxrjru5p8fjk",
    database: "p6l2jqmryeuv1cbb"
  
  })
};

"string literal does nothing"

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
