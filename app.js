
const express = require('express')
const app = express()
const port = 3000

const aboutRoute =require( './routes/aboutRoute');

app.use('/about', aboutRoute); // Monta la ruta en '/about'

app.get('/', (req, res) => { // define the home page route
  res.send('Birds home page')
  })

app.route('/experience') // define the experience route
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
app.route('/skills') // define the habilidades route
  .get((req, res) => {
      res.send('Habilidades birds')
  })
  .post((req, res) => {
      res.send('Habilidades birds')
  })
  .put((req, res) => {
      res.send('Habilidades birds')
  })
  .delete((req, res) => {
      res.send('Habilidades birds')
  })
app.route('/project') // define the proyectos route
  .get((req, res) => {
      res.send('Proyectos birds')
  })
  .post((req, res) => {
      res.send('Proyectos birds')
  })
  .put((req, res) => {
      res.send('Proyectos birds')
  })
  .delete((req, res) => {
      res.send('Proyectos birds')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})