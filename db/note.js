const mongoose = require('mongoose');
const NestedNoteSchema = require('./nestedNote');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    userId: { type: String, unique : true, required : true, dropDups: true},
    notes: [NestedNoteSchema]
});

module.exports = mongoose.model('Note', NoteSchema);
