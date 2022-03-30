const express = require("express");
const router = express.Router();
const { User } = require("../models/User");
const { auth } = require("../middleware/auth");

// 회원가입
router.post("/register", (req, res) => {
  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.status(400).json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

// 로그인
router.post("/login", (req, res) => {
  // email로 유저 존재 유무 확인
  User.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.json({
        loginSuccess: false,
        message: "해당하는 이메일이 존재하지 않습니다.",
      });
    }

    // password 일치 여부 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch) {
        return res.json({
          loginSuccess: false,
          message: "비밀번호가 일치하지 않습니다.",
        });
      }

      // password 일치 시 해당 유저에게 token 부여
      user.generateToken((err, user) => {
        if (err) {
          return res.status(400).send(err);
        }

        res
          .cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id });
      });
    });
  });
});

// 로그아웃
router.get("/logout", auth, (req, res) => {
  User.findOneAndUpdate(
    { _id: req.user._id }, // auth 미들웨어의 user
    { token: "" },
    (err, user) => {
      if (err) return res.json({ logoutSuccess: false, err });
      return res.json({ logoutSuccess: true });
    }
  );
});

// 페이지 이동 시 유저 권한 체크
router.get("/auth", auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    role: req.user.role,
    image: req.user.image,
  });
});

module.exports = router;
