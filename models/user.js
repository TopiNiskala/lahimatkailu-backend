import mongoose, {Schema} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

var userSchema = new Schema({
    
    username: String,
    password: String
});

userSchema.plugin(passportLocalMongoose);

export default mongoose.model('user', userSchema);




