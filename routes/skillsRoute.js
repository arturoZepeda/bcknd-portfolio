const express = require('express');
const router = express.Router();

router.route('/') // define the habilidades route
  .get((req, res) => {
      res.send('Habilidades birds')
  })
  .post((req, res) => {
      res.send('Habilidades birds')
  })
  .put((req, res) => {
      res.send('Habilidades birds')
  })
  .delete((req, res) => {
      res.send('Habilidades birds')
  })

module.exports = router;