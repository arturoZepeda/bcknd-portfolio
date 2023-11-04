const aboutSchema = require( '../models/aboutModel');
const mongoose = require('mongoose');


const About = mongoose.model('About', aboutSchema);

 class AboutController{
     postAbout (req, res) {                
        let newAbout = new About(req.body);
    
        newAbout.save((err, about) => {
            if(err){
                res.send(err);
            }    
            res.json(about);
        });
    }
    getAbout (req, res) {           
        About.find({}, (err, about) => {
            if(err){
                res.send(err);
            }
            res.json(about);
        });
    }
    putAbout (req, res) {           
        About.findOneAndUpdate({ _id: req.params.aboutId }, req.body, { new: true }, (err, about) => {
            if(err){
                res.send(err);
            }
            res.json(about);
        });
    }
    deleteAbout (req, res) {        
        About.remove({ _id: req.params.aboutId }, (err, about) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Se ha eliminado de manera exitosa!'});
        });
    }
}
module.exports = AboutController;