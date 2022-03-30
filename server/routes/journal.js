const express = require("express");
const router = express.Router();
const { Journal } = require("../models/Journal");
const { auth } = require("../middleware/auth");

// 일기 목록 가져오기
router.post("/list", (req, res) => {
  let limit = req.body.limit ? parseInt(req.body.limit) : 100;
  let skip = req.body.skip ? parseInt(req.body.skip) : 0;
  let filters = req.body.filters;

  Journal.find(filters)
    .populate("writer")
    .limit(limit)
    .skip(skip)
    .sort({ time: -1 })
    .exec((err, info) => {
      if (err) {
        return res.status(400).json({ success: false, err });
      }

      return res.status(200).json({ success: true, info, count: info.length });
    });
});

// 세부 일기
router.get("/getDetail", (req, res) => {
  let type = req.query.type;
  let id = req.query.id;

  Journal.find({ _id: id })
    .populate("writer")
    .exec((err, info) => {
      if (err) return res.status(400).json({ success: false, err });
      return res.status(200).json({ success: true, info });
    });
});

// 일기 작성
router.post("/write", (req, res) => {
  const journal = new Journal(req.body);

  journal.save((err, journal) => {
    if (err) {
      return res.status(400).json({ success: false, err });
    }
    return res.status(200).json({ success: true, journal });
  });
});

// 좋아요
router.post("/like", (req, res) => {
  let id = req.body.id;

  Journal.findOne({ _id: id }, (err, journal) => {
    journal.like = !journal.like;
    journal.save((err, journal) => {
      if (err) return res.json({ success: false, err });
      return res.status(200).json({ success: true, journal });
    });
  });
});

// 일기 삭제
router.post("/delete", (req, res) => {
  let id = req.body.id;

  Journal.deleteOne({ _id: id }, (err, journal) => {
    if (err) return res.json({ success: false });
    return res.json({ success: true, journal });
  });
});

// 일기 수정

module.exports = router;
