const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

// mongoDB 연결
const mongoose = require("mongoose");
const config = require("./config/key");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((e) => console.log(e));

// body-parser 옵션
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// cookie-parser
app.use(cookieParser());

// user 라우트
app.use("/api/users", require("./routes/user"));
// journal 라우트
app.use("/api/journal", require("./routes/journal"));
// setting 라우드
app.use("/api/setting", require("./routes/setting"));

if (process.env.NODE_ENV === "production") {
  // 배포 상태일 때,  static 파일은 build 폴더에서 처리된다
  app.use(express.static("client/build"));

  //모든 라우트를 위한 index.html을 보기 위해서는 build 폴더의 index.html을 본다
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`${port}port에서 실행되고 있습니다...`));
