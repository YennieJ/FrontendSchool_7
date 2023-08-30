var express = require("express");
var router = express.Router();

/* GET home page. */
// views 파일 안에 있는,
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// post request
// 클라이언트 쪽에서 받아오는 데이터
router.post("/", function (req, res) {
  console.log(req.body);

  // res 대표 사용법
  res.send("string");
  res.json({ message: "json" });
  res.render("views template");
});

// 대표 메서드
let arr = [];

// GET method
router.get("/read", (req, res) => {
  res.status(200).json({
    message: "read success",
  });
});

// POST method (데이터베이스)
router.post("/create", (req, res) => {
  const { data } = req.body;
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  });
});

// PUT method
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;

  res.status(200).json({
    message: "update success",
    result: arr,
  });
});

// DELETE method

router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
});

// 미들 웨어
const loginCheck = require("../module/loginCheck");
const upload = require("../module/imageUpload");

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success!",
  });
});

router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;

  res.status(200).json({
    message: "file upload success",
    file,
  });
});
module.exports = router;
