var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: {type: String, unique: true},
    password: {type: String},
    role: {type: Number}
});

var user = mongoose.model('users', userSchema);
module.exports = user;