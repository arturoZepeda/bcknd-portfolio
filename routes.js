const express = require('express') // import express

const router = express.Router() // create a new router

router.get('/', (req, res) => { // define the home page route
    res.send('Birds home page')
    }),
router.route('/about') // define the about route
    .get((req, res) => {
        res.send('About birds')
    })
    .post((req, res) => {
        res.send('About birds')
    })
    .put((req, res) => {
        res.send('About birds')
    })
    .delete((req, res) => {
        res.send('About birds')
    })
router.route('/experience') // define the experience route
    .get((req, res) => {
        res.send('Experience birds')
    })
    .post((req, res) => {
        res.send('Experience birds')
    })
    .put((req, res) => {
        res.send('Experience birds')
    })
    .delete((req, res) => {
        res.send('Experience birds')
    })
router.route('/abilidades')