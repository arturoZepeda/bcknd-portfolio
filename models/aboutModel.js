const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({
    nombre: {
        type: String,
        required: 'Ingrese su nombre'
    },
    apellido: {
        type: String,
        required: 'Ingrese su apellido'
    },
    titulo:[
        {
            type: String,
            required: 'Ingrese su titulo'
        }
    ],
    descripcion: {
        type: String,
        required: 'Ingrese su descripcion'
    
    },
    correo: {
        type: String,
        required: 'Ingrese su correo'
    },
    telefono: {
        type: Number,
        required: 'Ingrese su telefono'
    },

});