const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(__dirname + '/'));

// Route handler for the root path
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
