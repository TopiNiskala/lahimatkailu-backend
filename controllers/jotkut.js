import Joku from '../models/joku';
import moment from 'moment';


export const index = (req, res, next) => {
  Joku.find().lean().exec((err, jotkut) => res.json(
    { jotkut: jotkut.map(joku => ({
      ...joku,
    }))}
  ));
};
