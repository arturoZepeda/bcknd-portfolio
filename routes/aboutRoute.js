const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const aboutCont = new aboutController();
router.route('/')
  .get(this.aboutCont.getAbout)
  .post(this.aboutCont.postAbout)
  .put(this.aboutCont.putAbout)
  .delete(this.aboutCont.deleteAbout)

  module.exports = router;