import Kohde from '../models/user';
import moment from 'moment';

//This file returns JSON file including all 'user' stored in.
const index = (req, res, next) => {
  //Finds all places and return json response
  User.find().lean().exec((err, users) => res.json(
    // Iterates through each 'user'
    { users: users.map(user => ({
      ...user,
    }))}
  ));
};


export default index;