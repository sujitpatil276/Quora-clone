const express = require('express');
const router = express.Router();

const answerModel = require('../models/Answer');

router.post("/", async (req, res) => {
    // console.log(req.body);
    try {
      await answerModel
        .create({
          answer: req.body.answer,
          questionId: req.body.questionId,
          user: req.body.user,
        })
        .then(() => {
          res.status(201).send({
            status: true,
            message: "Answer added successfully",
          });
        })
        .catch((e) => {
          res.status(400).send({
            status: false,
            message: "Bad request",
          });
        });
    } catch (e) {
      res.status(500).send({
        status: false,
        message: "Error while adding answer",
      });
    }
});

module.exports = router; 