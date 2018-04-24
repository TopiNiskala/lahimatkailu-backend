import mongoose, {Schema} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';




var userSchema = new Schema({
    
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('user', userSchema);







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

