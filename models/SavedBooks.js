//This file will be required for the book controller
const { Schema, model } = require('mongoose');

const bookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: false},
    description: {type: String, required: false},
    link: {type: String, required: false},
    thumbnail: {type: String, required: false}
});

const SavedBooks = model('SavedBooks', bookSchema);

module.exports = SavedBooks;
