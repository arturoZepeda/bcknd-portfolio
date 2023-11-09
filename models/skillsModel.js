const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillsSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    porcentaje: {
        type: Number,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    fechaDesde: {
        type: Date,
        required: true
    }
});

module.exports =  skillsSchema;