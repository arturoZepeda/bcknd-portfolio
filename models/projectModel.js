const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
    titulo: {
        type: String,
        required: 'Ingrese su titulo'
    },
    descripcion: {
        type: String,
        required: 'Ingrese su descripcion'
    },
    url: {
        type: String,
        required: 'Ingrese su url'
    },
    imagen: {
        type: String,
        required: 'Ingrese su imagen'
    },
    identificador: {
        type: String,
        required: 'Ingrese su identificador'
    }
});

module.exports = projectSchema;