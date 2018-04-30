const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NestedNoteSchema = new Schema({
    noteTitle: {type: String, required : true},
    noteBody: String
});

module.exports = NestedNoteSchema;