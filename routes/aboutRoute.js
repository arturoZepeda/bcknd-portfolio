const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');
const aboutCont = new aboutController();
router.route('/')
  .get((req, res) => {
    console.log(req);
    aboutCont.getAbout(req, res);
  })

  .post(
    (req, res) => {
      console.log(req);
      aboutCont.postAbout(req, res);
    }
    )
  .put(aboutCont.putAbout)
  .delete(aboutCont.deleteAbout)

  module.exports = router;