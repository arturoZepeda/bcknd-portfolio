const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skillsController');
const skillsCont = new skillsController();

router.route('/') // define the habilidades route
  .get(skillsCont.getSkills)
  .post(skillsCont.postSkills)
  .put(skillsCont.putSkills)
  .delete(skillsCont.deleteSkills)

module.exports = router;