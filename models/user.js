var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/MyDatabase')
var userSchema = mongoose.Schema({
    _id: String,
    username: String,
    password: String,
});

/*
userSchema.methods.validPassword = function(pwd) {
    return(this.password===pwd);
};


userSchema.pre('save', function(next) {
    if (this.password) {
        this.salt = new Buffer(
          crypto.randomBytes(16).toString('base64'), 
          'base64'
        );
        this.password = crypto.pbkdf2Sync(
            password, this.salt, 10000, 64).toString('base64');
        
    };
});
*/

var user = mongoose.model('users', userSchema, user);
//module.exports = 'mongodb://localhost/users';

