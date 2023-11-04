const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
      res.send('About birds')
  })
  .post((req, res) => {
      res.send('About birds')
  })
  .put((req, res) => {
      res.send('About birds')
  })
  .delete((req, res) => {
      res.send('About birds')
  })

  module.exports = router;