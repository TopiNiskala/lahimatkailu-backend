import Kohde from '../models/kohde';
import moment from 'moment';


export const index = (req, res, next) => {
  Kohde.find().lean().exec((err, jotkut) => res.json(
    { jotkut: jotkut.map(joku => ({
      ...joku,
    }))}
  ));
};
