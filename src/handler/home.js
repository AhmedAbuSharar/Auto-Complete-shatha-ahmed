const fs = require("fs");
const path = require("path");


function homehandler(res) {
  const filePath = path.join(__dirname, '..', '..', 'index.html');
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>server erorr</h1>');
    } else {
      res.writeHead(200, { 'content-Type': 'text/html' });
      res.end(data);
    }
  });
}

module.exports = homehandler;
