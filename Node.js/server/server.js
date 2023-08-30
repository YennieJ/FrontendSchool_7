const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("main upload");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("main delete");
    } else {
      res.writeHead(404);
      res.end("not found");
    }
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속");
  });
