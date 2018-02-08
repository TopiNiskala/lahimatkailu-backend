import express, { Router } from 'express';
import { index } from './controllers/kohteet';
import { add } from './controllers/add';
import mongoose from 'mongoose';
import Kohde from './models/kohde';

const router = Router();

router.route('/kohteet').get(index);
  
router.get('/new', function(req, res) {
    res.render('new', { title: 'Add' });
});

router.post('/add', function(req, res) {

    var type = req.body.type;
    var name = req.body.name;
    var city = req.body.city;
    var postalCode = req.body.postalCode;
    var street = req.body.street;
    var phoneNumber = req.body.phoneNumber;
    var picture = req.body.picture;
    var latitude = req.body.latitude;
    var longtitude = req.body.longtitude;
    var info = req.body.info;
    var directions = req.body.directions;
    var start = req.body.start;
    var end = req.body.end;

    const newData = [
        {
            "name": name,
            "address": [{
                "city": city,
                "postalCode": postalCode,
                "street": street,
                "phoneNumber": phoneNumber
            }],
            "picture": picture,
            "location": [{
                "latitude": latitude,
                "longtitude": longtitude
            }],
            "info": info,
            "directions": directions,
            "openingHours": [{
                "start": start,
                "end": end
            }]
        }
    ]
    
    mongoose.connect('mongodb://localhost/kohteet');

    newData.map(data => {
        const kohde = new Kohde(data);
        kohde.save(function (err, doc) {
            if (err) {
                res.send("There was a problem adding the information to the database.");
            }
            else {
                res.redirect("kohteet");
            }
        });
    });
});




//DELETE
router.delete('/delete', function(req, res) {

    mongoose.connect('mongodb://localhost/kohteet');

  
    
        const kohde = new Kohde(data);
        kohde.delete(function (err, doc) {
        
        
        kohde.delete('kohde', function(req, res) {
            kohde.findByIdAndRemove()
                     
            if (err) {
                res.send("There was a problem deleting the information to the database.");
            }
            else {
                res.redirect("kohteet/:id)");
            }
        });
    });

    });




/*


//Delete
router.delete(function(req, res) {
        kohde.remove({
            _id: req.params.kohde_id
        }, function(err, kohteet) {
            if (err)
                res.send(err);

            res.json({ message: 'Successfully deleted' });
        });
    });
*/



export default router;
