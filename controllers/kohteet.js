import Kohde from '../models/kohde';
import moment from 'moment';


export const index = (req, res, next) => {
  Kohde.find().lean().exec((err, kohteet) => res.json(
    { kohteet: kohteet.map(kohde => ({
      ...kohde,
    }))}
  ));
};
