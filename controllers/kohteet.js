import Kohde from '../models/kohde';
import moment from 'moment';

//This file returns JSON file including all 'kohde' stored in.
export const index = (req, res, next) => {
  //Finds all places and return json response
	var aLat = 60.182113;
	var aLong = 24.913422;
	var dist = 0.09;
  Kohde.find({ "location.latitude": { $gt: (aLat - dist), $lt: (aLat + dist) }, "location.longitude": { $gt: (aLong - dist), $lt: (aLong + dist) }}).lean().exec((err, kohteet) => res.json(
    // Iterates through each 'kohde'
    { kohteet: kohteet.map(kohde => ({
      ...kohde,
    }))}
  ));
};
