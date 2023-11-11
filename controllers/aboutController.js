const aboutSchema = require( '../models/aboutModel');
const mongoose = require('mongoose');


const About = mongoose.model('About', aboutSchema);

 class AboutController{

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }

    postAbout (req, res) {                
        let newAbout = new About(req.body);
    
        newAbout.save()
            .then((about) => {
                res.json(about);
            })
            .catch((err) => {
                res.send(err);
            });
    }
    getAbout (req, res) {
	    console.log(req.query);
	    console.log(req.query.aboutId);
        if (req.query.aboutId) {
            About.findById(req.query.aboutId)
                .then((about) => {
                    res.json(about);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
        else {
        About.find({}).exec()
            .then((about) => {
                res.json(about);
            })
            .catch((err) => {
                res.send(err);
            });
        }
    }
    putAbout(req, res) {
        About.findOneAndUpdate(
            { _id: req.query.aboutId },
            req.body,
            { new: true }
        )
            .then((about) => {
                res.json(about);
            })
            .catch((err) => {
                res.send(err);
            });
    }
    deleteAbout (req, res) {        
        About.deleteOne({ _id: req.params.aboutId })
            .then(() => {
                res.json({ message: 'Se ha eliminado de manera exitosa!'});
            })
            .catch((err) => {
                res.send(err);
            });
    }
}
module.exports = AboutController;
