const express = require("express");
const router = express.Router();
const { Setting } = require("../models/Setting");

// 설정 업데이드
router.post("/update", (req, res) => {
  const { background, fontsize } = req.body;

  Setting.findOneAndUpdate(
    { mode: "update" },
    { $set: { background, fontSize: fontsize } },
    (err, info) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, info });
    }
  );
});

// 설정 불러오기
router.post("/list", (req, res) => {
  Setting.find()
    .populate("writer")
    .exec((err, info) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, info });
    });
});

module.exports = router;
