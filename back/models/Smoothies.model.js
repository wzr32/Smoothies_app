const { Schema, model } = require('mongoose');


const smoothieSchema = new Schema({
    name: {
        type: String,
        trim: true,
        unique: true
    },
    fruits: Array,
    liquid: String,
    protein: String,
    taste: Number,
    likes: {
        type: Number,
        default: 0
    }
});

module.exports = model('Smoothie', smoothieSchema);
