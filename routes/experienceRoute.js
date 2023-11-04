const express = require('express');
const router = express.Router();

router.route('/') // define the experience route
  .get((req, res) => {
      res.send('Experience birds')
  })
  .post((req, res) => {
      res.send('Experience birds')
  })
  .put((req, res) => {
      res.send('Experience birds')
  })
  .delete((req, res) => {
      res.send('Experience birds')
  })

module.exports = router;