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
    
        newAbout.save((err, about) => {
            if(err){
                res.send(err);
            }    
            res.json(about);
        });
        return this.res;
    }
    getAbout (req, res) {           
        About.find({}, (err, about) => {
            if(err){
                res.send(err);
            }
            res.json(about);
        });
        return this.res;
    }
    putAbout (req, res) {           
        About.findOneAndUpdate({ _id: req.params.aboutId }, req.body, { new: true }, (err, about) => {
            if(err){
                res.send(err);
            }
            res.json(about);
        });
        return this.res;
    }
    deleteAbout (req, res) {        
        About.remove({ _id: req.params.aboutId }, (err, about) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Se ha eliminado de manera exitosa!'});
        });
        return this.res;
    }
}
module.exports = AboutController;