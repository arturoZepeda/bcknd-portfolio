
const express = require('express')
const app = express()
const port = 3000

const aboutRoute =require('./routes/aboutRoute');
const experienceRoute =require('./routes/experienceRoute');

app.use('/about', aboutRoute); // Monta la ruta en '/about'
app.use('/experience', experienceRoute); // Monta la ruta en '/experience'
app.use('/skills', require('./routes/skillsRoute')); // Monta la ruta en '/skills'
app.use('/projects', require('./routes/projectsRoute')); // Monta la ruta en '/projects'

app.get('/', (req, res) => { // define the home page route
  res.send('Birds home page')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})