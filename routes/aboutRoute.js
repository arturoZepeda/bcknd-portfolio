const express = require('express');
const router = express.Router({mergeParams: true});
const aboutController = require('../controllers/aboutController');
const aboutCont = new aboutController();
router.route('/:aboutId?')
  .get(aboutCont.getAbout)
  .post(aboutCont.postAbout)
  .put(aboutCont.putAbout)
  .delete(aboutCont.deleteAbout)

  module.exports = router;
