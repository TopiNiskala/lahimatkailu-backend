import express, { Router } from 'express';
import { index } from './controllers/kohteet';
import mongoose from 'mongoose';
import Kohde from './models/kohde';
import kohde from './models/kohde';
import KohdeRemoved from './models/kohde_removed';

var config = require('./config');
var googleMapsClient = require('@google/maps').createClient({
  key: config.googleMapsApiKey,
  Promise: Promise
});

//Initialize router
const router = Router();

// Start page ------------------------------------------------

router.get(['/', '/index'], function(req, res) {
    res.render('index', { title: 'Lähimatkailu', current: 'index' });
});
//-------------------------------------------------------------

// Handle /kohteet.json route with index action from kohteet controller
//router.route('/kohteet.json').get(index);

router.get('/kohteet.json', function(req, res, next) {
	var location = req.query.location;
	var lat;
	var long;
	var dist;
	if (location === undefined || location.lat === undefined || location.long === undefined || location.dist === undefined) {		
		lat = 60.2013725;
		long = 24.9340407;
		dist = 10000;
	} else {
		lat = parseFloat(location.lat);
		long = parseFloat(location.long);
		dist = parseFloat(location.dist);
	}
  		//Finds all places and return json response
  		Kohde.find({ "location.latitude": { $gt: (lat - dist), $lt: (lat + dist) }, "location.longitude": { $gt: (long - dist), $lt: (long + dist) }}).lean().exec((err, kohteet) => res.json(
    		// Iterates through each 'kohde'
    			{ kohteet: kohteet.map(kohde => ({
      				...kohde,
    			}))}
 		)); 	
});

// Directs the user using /new to  file new.pug where you can add a new place in database.
router.get('/new', function(req, res) {
    res.render('new', { title: 'Add a new destination', current: 'new' });
});

// Directs the user using /list to  file list.pug Where you can see all places in db and choose if you want to modify or delete them.
router.get('/list', function(req, res) {
    res.render('list', { title: 'List', current: 'list' });
});

//Delete
router.delete('/delete/:id', function (req, res){
    Kohde.findOne({ _id: req.params.id }, function(err, response) {
        
        // Copy target to a backup collection
        let swap = new (KohdeRemoved)(response)
        swap.isNew = true
        swap.save();
        // Remove original
        response.remove()
        
        if(err) { res.json({message: "error deleting record id"}); }
        else { res.json({message: "Target has been deleted"}); }
    
    });   
});

router.get('/delete/:id', function(req, res) {
     var id = req.params.id;
    res.render('delete', { 
        id: id,
        title: 'DESTROY' });
    
});     
   
//MODIFY
router.get('/modify/:id', function(req, res) {
    var id = req.params.id;
    
    Kohde.findById(id, (err, kohde) => {
        if (err || !kohde) {
            res.send("There was a problem reading the information from the database.");
        } else {
            var type = kohde.type;
            var service, food, sight;
            
            if (type == "Food") {
                food = true;
            } else if (type == "Service") {
                service = true;
            } else {
                sight = true;
            }

            
            res.render('new', { 
                id: id, 
                nimi: kohde.name, 
                city: kohde.address.city, 
                postalCode: kohde.address.postalCode, 
                street: kohde.address.street, 
                phoneNumber: kohde.address.phoneNumber,
                picture: kohde.picture,
                latitude: kohde.location.latitude,
                longitude: kohde.location.longitude,
                info: kohde.info,
                directions: kohde.directions,
                monStart: kohde.openingHours.mon.start,
                monEnd: kohde.openingHours.mon.end,
                tueStart: kohde.openingHours.tue.start,
                tueEnd: kohde.openingHours.tue.end,
                wedStart: kohde.openingHours.wed.start,
                wedEnd: kohde.openingHours.wed.end,
                thuStart: kohde.openingHours.thu.start,
                thuEnd: kohde.openingHours.thu.end,
                friStart: kohde.openingHours.fri.start,
                friEnd: kohde.openingHours.fri.end,
                satStart: kohde.openingHours.sat.start,
                satEnd: kohde.openingHours.sat.end,
                sunStart: kohde.openingHours.sun.start,
                sunEnd: kohde.openingHours.sun.end,
                type: kohde.type,
                food: food,
                service: service,
                sight: sight,
                title: 'Modify destination'
            });
        }
    });
});

// View
router.get('/view/:id', function(req, res) {
    var id = req.params.id;
    
    Kohde.findById(id, (err, kohde) => {
        if (err || !kohde) {
            res.send("There was a problem reading the information from the database.");
        } else {            
            res.render('view', { 
                id: id, 
                name: kohde.name, 
                city: kohde.address.city, 
                postalCode: kohde.address.postalCode, 
                street: kohde.address.street, 
                phoneNumber: kohde.address.phoneNumber,
                picture: kohde.picture,
                latitude: kohde.location.latitude,
                longitude: kohde.location.longitude,
                info: kohde.info,
                directions: kohde.directions,
                monStart: kohde.openingHours.mon.start,
                monEnd: kohde.openingHours.mon.end,
                tueStart: kohde.openingHours.tue.start,
                tueEnd: kohde.openingHours.tue.end,
                wedStart: kohde.openingHours.wed.start,
                wedEnd: kohde.openingHours.wed.end,
                thuStart: kohde.openingHours.thu.start,
                thuEnd: kohde.openingHours.thu.end,
                friStart: kohde.openingHours.fri.start,
                friEnd: kohde.openingHours.fri.end,
                satStart: kohde.openingHours.sat.start,
                satEnd: kohde.openingHours.sat.end,
                sunStart: kohde.openingHours.sun.start,
                sunEnd: kohde.openingHours.sun.end,
                type: kohde.type,
                title: kohde.name
            });
        }
    });
});

//Posts filled form (new 'kohde') to database
router.post('/add', function(req, res) {

    var type = req.body.type;
    var name = req.body.name;
    var city = req.body.city;
    var postalCode = req.body.postalCode;
    var street = req.body.street;
    var phoneNumber = req.body.phoneNumber;
    var picture = req.body.picture;
    if(typeof(picture) != "string")
        picture = picture.filter(n => n)
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var info = req.body.info;
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
    
    if(req.body.id) {
        var objectId = req.body.id;
    } else {
        var ObjectID = require('mongodb').ObjectID;
        var objectId = new ObjectID();
    }
    
    // If latitude or longitude is empty, get them from Google Maps API
    if(latitude == "" || longitude == "") {
        googleMapsClient.geocode({
            address: street + ' ' + postalCode + ' ' + city
            })
            .asPromise()
            .then(response => {
                latitude = parseFloat(response.json.results[0].geometry.location.lat)
                longitude = parseFloat(response.json.results[0].geometry.location.lng)
                addData();
            })
            .catch(err => {
                console.log(err)
                addData();
            })
    } else {
        addData();
    }
    
    function addData() {
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
            var query = { _id: objectId };
            
    
            
            Kohde.findOneAndUpdate(query, kohde, {upsert:true}, function (err, doc) {
                if (err) {
                    res.send("There was a problem adding the information to the database.");
                }
                else {
                    res.redirect("view/" + objectId);
                }  
            
            });
            
        });
    }
});

export default router;
