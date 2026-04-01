const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  res.end(`
    <html>
      <head>
        <title>Eddie AWS App</title>
      </head>
      <body style="background-color:black; color:white; text-align:center; margin-top:100px;">
        <h1>🚀 Eddie's AWS App</h1>
        <h2>Running on EC2</h2>
        <p>Server: ${require('os').hostname()}</p>
      </body>
    </html>
  `);
});

server.listen(80, () => {
  console.log('Server running on port 80');
});