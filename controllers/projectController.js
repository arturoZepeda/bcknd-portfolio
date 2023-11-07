const projectSchema = require('../models/projectModel');
const mongoose = require('mongoose');

const Project = mongoose.model('Project', projectSchema);

class ProjectController{
    constructor(req, res) {
        this.req = req;
        this.res = res;
    }
    postProject (req, res) {
        let newProject = new Project(req.body);
    
        newProject.save()
            .then((project) => {
                res.json(project);
            })
            .catch((err) => {
                res.send(err);
            });
    }
    getProject (req, res) {
        if (req.params.projectId) {
            Project.findById(req.params.projectId)
                .then((project) => {
                    res.json(project);
                })
                .catch((err) => {
                    res.send(err);
                });
        }
        else {
        Project.find({}).exec()
            .then((project) => {
                res.json(project);
            })
            .catch((err) => {
                res.send(err);
            });
        }
    }
    putProject (req, res) {
        Project.findOneAndUpdate({}, req.body, {new: true})
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.send(err);
        });
    }
    deleteProject (req, res) {
        Project.deleteOne({ _id: req.params.projectId })
            .then(() => {
                res.json({ message: 'Se ha eliminado de manera exitosa!'});
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = ProjectController;