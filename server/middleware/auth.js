// token을 통한 인증 처리 미들웨어
const { User } = require("../models/User");

let auth = (req, res, next) => {
  let token = req.cookies.x_auth;

  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, error: true });

    // req에 token과 user 정보를 넣어 user 라우트에서 정보를 사용할 수 있게 한다
    req.token = token;
    req.user = user;
    next();
  });
};

module.exports = { auth };
