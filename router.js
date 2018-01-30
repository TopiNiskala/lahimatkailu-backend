import express, { Router } from 'express';
import { index } from './controllers/jotkut';
import { add } from './controllers/add';
import mongoose from 'mongoose';
import Joku from './models/joku';

const router = Router();

router.route('/jotkut.json')
  .get(index);
  
router.get('/new', function(req, res) {
    res.render('new', { title: 'Add' });
});

/* POST to Add User Service */
router.post('/add', function(req, res) {


    // Get our form values. These rely on the "name" attributes
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



    // Submit to the DB
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
    
    mongoose.connect('mongodb://localhost/jotkut');

    newData.map(data => {
        const joku = new Joku(data);
        joku.save(function (err, doc) {
            if (err) {
                // If it failed, return error
                res.send("There was a problem adding the information to the database.");
            }
            else {
                // And forward to success page
                res.redirect("jotkut.json");
            }
        });
    });

});


export default router;
