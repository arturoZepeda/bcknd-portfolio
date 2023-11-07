const skillsSchema = require('../models/skillsModel');
const mongoose = require('mongoose');

const Skills = mongoose.model('Skills', skillsSchema);

class SkillsController{

    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    postSkills (req, res) {
        let newSkills = new Skills(req.body);
    
        newSkills.save()
            .then((skills) => {
                res.json(skills);
            })
            .catch((err) => {
                res.send(err);
            });
    }
    getSkills (req, res) {
        if (req.params.skillsId) {
            Skills.findById(req.params.skillsId)
                .then((skills) => {
                    res.json(skills);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
        else {
        Skills.find({}).exec()
            .then((skills) => {
                res.json(skills);
            })
            .catch((err) => {
                res.send(err);
            });
        }
    }
    putSkills (req, res) {
        Skills.findOneAndUpdate({}, req.body, {new: true})
        .then((skills) => {
            res.json(skills);
        })
        .catch((err) => {
            res.send(err);
        });
    }
    deleteSkills (req, res) {
        Skills.deleteOne({ _id: req.params.skillsId })
            .then(() => {
                res.json({ message: 'Se ha eliminado de manera exitosa!'});
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = SkillsController;