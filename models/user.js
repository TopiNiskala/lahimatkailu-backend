var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    role: {type: Number}
    
});

var user = mongoose.model('users', userSchema);
module.exports = user;