const mongoose = require('mongoose')

const Schema = mongoose.Schema
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, {timestamps: true})

// now make a model based on the schema, the schema defines the structure of a particular document (or a type of document) inside our database. A model applies that schema to a particular model, and then we use that model to interact with a collection of that name.

module.exports = mongoose.model('Workout', workoutSchema)

