// Inside the connection.js file, setup the code to connect Node to MySQL.
// Export the connection.

// Set up MySQL connection.
var mysql = require("mysql");


  var connection = mysql.createConnection({
    host: "dyud5fa2qycz1o3v.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "swsf15gvqs4a4jx1",
    password: "nne987vojsd7qveu",
    database: "vcl8p17xx1g1z8ht"
  });



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
