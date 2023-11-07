const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const projectCont = new projectController();
router.route('/') // define the proyectos route
  .get(projectCont.getProject)
  .post(projectCont.postProject)
  .put(projectCont.putProject)
  .delete(projectCont.deleteProject)

module.exports = router;