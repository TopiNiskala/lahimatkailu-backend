import Kohde from '../models/kohde';
import moment from 'moment';

//This file returns JSON file including all 'kohde' stored in.
export const index = (req, res, next) => {
  //Finds all places and return json response
	var aLat = 60.182113;
	var aLong = 24.913422;
	var dist = 0.09;
	var aLat1 = aLat + dist;
	var aLong1 = aLong + dist;
	var aLat2 = aLat - dist;
	var aLong2 = aLong - dist;
  Kohde.find({ "location.latitude": { $gt: aLat2, $lt: aLat1 }, "location.longitude": { $gt: aLong2, $lt: aLong1 }}).lean().exec((err, kohteet) => res.json(
    // Iterates through each 'kohde'
    { kohteet: kohteet.map(kohde => ({
      ...kohde,
    }))}
  ));
};
