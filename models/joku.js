import mongoose, { Schema } from 'mongoose';

var jokuSchema = new Schema({
  type: String,
  name: String,
  address: [{
      city: String,
      postalCode: String,
      street: String,
      phoneNumber: String
  }],
  picture: String,
  location: [{
      latitude: String,
      longtitude: String
  }],
  info: String,
  directions: String,
  openingHours: [{
      start: String,
      end: String
  }],
});

export default mongoose.model('joku', jokuSchema);
