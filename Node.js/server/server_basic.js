const http = require("http");

http
  // 서버생성
  .createServer((req, res) => {
    res.writeHead(200, { "Contet-Type": "text/html" }); // status code
    res.end("<p>Hello Word</p>");
  })
  // 서버대기
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속");
  });

// localhost(내 컴퓨터 주소) =127.0.0.1 (IP)
// port 서버내의 프로세스를 구분하는 번호 (HTTP,DB)

// npm install -D nodemon only Developer
