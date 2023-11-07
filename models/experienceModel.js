const mongoose = require('mongoose');
const { Schema } = mongoose;

const aboutSchema = new Schema({
    titulo: {
        type: String,
        required: 'Ingrese su titulo'
    },
    empresa: {
        type: String,
        required: 'Ingrese su empresa'
    },
    fechaInicio: {
        type: Date,
        required: 'Ingrese su fecha de inicio'
    },
    fechaFin: {
        type: Date,
        required: 'Ingrese su fecha de finalizacion'
    },
    descripcion: {
        type: String,
        required: 'Ingrese su descripcion'
    },
    habilidades: [
        {
            type: String,
            required: 'Ingrese su habilidad'
        }
    ],
    tecnologias: [
        {
            type: String,
            required: 'Ingrese su tecnologia'
        }
    ],
    url: {
        type: String,
        required: 'Ingrese su url'
    },
    identificador: {
        type: String,
        required: 'Ingrese su identificador'
    }
});