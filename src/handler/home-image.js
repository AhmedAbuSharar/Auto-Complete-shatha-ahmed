const fs = require('fs');
const path = require('path');

const obj = {
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.jpg': 'image/jpg',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.json': 'application/json',
  '.html': 'text/html',
};

function homeImageHandler(res, endpoint) {
  const filePath = path.join(__dirname, '..', '..', 'images', 'home-image.jpg');
  const ext = path.extname(endpoint);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'content-Type': 'text/html' });
      res.end('<h1>server erorr</h1>');
    } else {
      res.writeHead(200, { 'content-Type': obj[ext] });
      res.end(data);
    }
  });
}

module.exports = homeImageHandler;
