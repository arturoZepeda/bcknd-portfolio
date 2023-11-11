const express = require('express');
const router = express.Router();
const experienceController = require('../controllers/experienceController');
const experienceCont = new experienceController();

router.route('/:experienceId?') // define the experience route
  .get(experienceCont.getExperience)
  .post(experienceCont.postExperience)
  .put(experienceCont.putExperience)
  .delete(experienceCont.deleteExperience)

module.exports = router;