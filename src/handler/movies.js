const fs = require("fs");
const path = require("path");
const dynamicFilter = require("./search");

const obj = {
  ".css": "text/css",
  ".js": "text/javascript",
  ".jpg": "image/jpg",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".json": "application/json",
  ".html": "text/html",
};


function moviesHandler(res , endpoint){
    const filePath = path.join(__dirname, "..","./movieName.json");
    const ext = path.extname(endpoint);
    const startIndex = endpoint.indexOf("?") + 1;
    const endIndex = endpoint.length + 1;
    let inputData = endpoint.slice(startIndex, endIndex);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "content-Type": obj[ext] });
        res.end("<h1>server erorr</h1>");
      } else {
        const cleanData = JSON.parse(data);
        const clearArray = dynamicFilter(cleanData, inputData);
        console.log(" endpoint = " + inputData);
        res.end(JSON.stringify(clearArray));
      }
    });
}

module.exports=moviesHandler