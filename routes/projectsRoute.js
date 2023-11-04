const express = require('express');
const router = express.Router();

router.route('/') // define the proyectos route
  .get((req, res) => {
      res.send('Proyectos birds')
  })
  .post((req, res) => {
      res.send('Proyectos birds')
  })
  .put((req, res) => {
      res.send('Proyectos birds')
  })
  .delete((req, res) => {
      res.send('Proyectos birds')
  })

module.exports = router;