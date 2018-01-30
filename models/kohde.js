import mongoose, { Schema } from 'mongoose';

var kohdeSchema = new Schema({
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
      longitude: String
  }],
  info: String,
  directions: String,
  openingHours: [{
      start: String,
      end: String
  }],
});

export default mongoose.model('kohde', kohdeSchema);
