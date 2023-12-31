const experienceSchema = require('../models/experienceModel');
const mongoose = require('mongoose');

const Experience = mongoose.model('Experience', experienceSchema);

class ExperienceController {
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    postExperience(req, res) {
        let newExperience = new Experience(req.body);
        newExperience.save()
            .then((experience) => {
                res.json(experience);
            })
            .catch((err) => {
                res.send(err);
            });
    }
    getExperience(req, res) {
        console.log(req.query.experienceId);
        if (req.query.experienceId) {
            Experience.findById(req.query.experienceId)
                .then((experience) => {
                    res.json(experience);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
        else {
            Experience.find({}).exec()
                .then((experience) => {
                    res.json(experience);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
    }
    putExperience(req, res) {
        Experience.findOneAndUpdate(
            { _id: req.query.experienceId },
            req.body,
            { new: true }
        )
        .then((experience) => {
            res.json(experience);
        })
        .catch((err) => {
            res.send(err);
        });
    }
    deleteExperience(req, res) {
        Experience.deleteOne({ _id: req.params.experienceId })
        .then(() => {
            res.json({ message: 'Se ha eliminado de manera exitosa!'});
        })
        .catch((err) => {
            res.send(err);
        });
    }
}

module.exports = ExperienceController;