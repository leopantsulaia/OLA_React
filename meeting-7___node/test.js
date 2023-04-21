const http = require('http');
const fs = require('fs');
const path = require('path');
const port = 8080;

const server = http.createServer(function (req, res) {
  if (req.url === '/test.css') {
    const cssPath = path.join(__dirname, 'test.css');
    const fileStream = fs.createReadStream(cssPath, 'utf-8');
    res.writeHead(200, { 'Content-Type': 'text/css' });
    fileStream.pipe(res);
  } else if (req.url === '/') {
    const htmlPath = path.join(__dirname, 'index.html');
    fs.readFile(htmlPath, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write('Error: File Not Found');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('Error: File Not Found');
    res.end();
  }
});

server.listen(port, function (error) {
  if (error) console.log('Smth went wrong', error);
  else console.log('Server is listening on port ' + port);
});
