import express, { Router } from 'express';
import { index } from './controllers/kohteet';
import { add } from './controllers/add';
import mongoose from 'mongoose';
import Kohde from './models/kohde';

const router = Router();

router.route('/kohteet.json').get(index);
  
router.get('/new', function(req, res) {
    res.render('new', { title: 'Lisää kohde' });
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
    var longitude = req.body.longitude;
    var info = req.body.info;
    var directions = req.body.directions;
    var monStart = req.body.monStart;
    var monEnd = req.body.monEnd;
    var tueStart = req.body.tueStart;
    var tueEnd = req.body.tueEnd;
    var wedStart = req.body.wedStart;
    var wedEnd = req.body.wedEnd;
    var thuStart = req.body.thuStart;
    var thuEnd = req.body.thuEnd;
    var friStart = req.body.friStart;
    var friEnd = req.body.friEnd;
    var satStart = req.body.satStart;
    var satEnd = req.body.satEnd;
    var sunStart = req.body.sunStart;
    var sunEnd = req.body.sunEnd;

    const newData = [
        {
            "type": type,
            "name": name,
            "address": {
                "city": city,
                "postalCode": postalCode,
                "street": street,
                "phoneNumber": phoneNumber
            },
            "picture": picture,
            "location": {
                "latitude": latitude,
                "longitude": longitude
            },
            "info": info,
            "directions": directions,
            "openingHours": {
                "mon": {
                    "start": monStart,
                    "end": monEnd
                },
                "tue": {
                    "start": tueStart,
                    "end": tueEnd
                },
                "wed": {
                    "start": wedStart,
                    "end": wedEnd
                },
                "thu": {
                    "start": thuStart,
                    "end": thuEnd
                },
                "fri": {
                    "start": friStart,
                    "end": friEnd
                },
                "sat": {
                    "start": satStart,
                    "end": satEnd
                },
                "sun": {
                    "start": sunStart,
                    "end": sunEnd
                }
            }
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
                res.redirect("kohteet.json");
            }
        });
    });

});


export default router;
