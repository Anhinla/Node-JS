const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to our home page');
    res.end(); // End the response after writing the content.
  } else if (req.url === '/about') {
    res.write('Here is our short history');
    res.end(); // End the response after writing the content.
  } else {
    res.write(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
    res.end(); // End the response after writing the content.
  }
});

server.listen(5000);
