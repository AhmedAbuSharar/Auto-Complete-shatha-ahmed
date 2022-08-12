const {
  homeHandler,
  homeImageHandler,
  moviesHandler,
  publicHandler,
} = require('./handler/index');

const router = (req, res) => {
  const endpoint = req.url;
  if (endpoint === '/') {
    homeHandler(res);
  } else if (endpoint === '/images/home-image.jpg') {
    homeImageHandler(res, endpoint);
  } else if (endpoint.includes('/movies')) {
    moviesHandler(res, endpoint);
  } else if (endpoint.includes('public')) {
    publicHandler(res, endpoint);
  } else {
    res.writeHead(404, { 'content-Type': 'text/html' });
    res.end('<h1> Page Not Found</h1>');
  }
};

module.exports = router;