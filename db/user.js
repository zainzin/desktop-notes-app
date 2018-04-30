const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, unique : true, required : true, dropDups: true},
    password: {type: String, unique : true, required : true, dropDups: true}
});

module.exports = mongoose.model('User', userSchema);