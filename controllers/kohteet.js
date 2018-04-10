import Kohde from '../models/kohde';
// import moment from 'moment';

//This file returns JSON file including all 'kohde' stored in.
const index = (req, res, next) => {
  //Finds all places and return json response
  Kohde.find().lean().exec((err, kohteet) => res.json(
    // Iterates through each 'kohde'
    { kohteet: kohteet.map(kohde => ({
      ...kohde,
    }))}
  ));
};


export default index;