const mongoose = require('mongoose');
const express = require('express')
require('dotenv').config();
//require('dotenv').config({path:"./.ENV"});
const app = express();
const port = 3000;
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/Produccion');
app.use(express.json());
app.use('/about', require('./routes/aboutRoute')); // Monta la ruta en '/about'
app.use('/experience', require('./routes/experienceRoute')); // Monta la ruta en '/experience'
app.use('/skills', require('./routes/skillsRoute')); // Monta la ruta en '/skills'
app.use('/projects', require('./routes/projectsRoute')); // Monta la ruta en '/projects'

app.get('/', (req, res) => { // define the home page route
  res.send('Birds home page')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
