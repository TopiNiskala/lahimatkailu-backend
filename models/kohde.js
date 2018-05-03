import mongoose, { Schema } from 'mongoose';

var kohdeSchema = new Schema({
  _id: String,
  type: String,
  name: String,
  address: {
      city: String,
      postalCode: String,
      street: String,
      phoneNumber: String
  },
  picture: [ String ],
  location: {
      latitude: Number,
      longitude: Number
  },
  homepage: String,
  some: [ String ],
  symbols: [ String ],
  info: String,
  openingHours: {
    mon: {
      start: String,
      end: String
    },
    tue: {
      start: String,
      end: String
    },
    wed: {
      start: String,
      end: String
    },
    thu: {
      start: String,
      end: String
    },
    fri: {
      start: String,
      end: String
    },
    sat: {
      start: String,
      end: String
    },
    sun: {
      start: String,
      end: String
    }
  },
});

export default mongoose.model('kohde', kohdeSchema);
