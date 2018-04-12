// import express, { Router } from 'express';
import { Router } from 'express';
import index from './controllers/kohteet';
import mongoose from 'mongoose';
import Kohde from './models/kohde';
import KohdeRemoved from './models/kohde_removed';
import local from 'passport-local';
import config from './config';
// var config = require('./config');
import passport from 'passport';

import {createClient} from '@google/maps';

import {ObjectID} from 'mongodb';

let googleMapsClient = createClient({
    key: config.googleMapsApiKey,
    Promise: Promise
});

// var googleMapsClient = require('@google/maps').createClient({
//   key: config.googleMapsApiKey,
//   Promise: Promise
// });

// mongoose.connect('mongodb://localhost/kohteet');

//Initialize router
const router = Router();

// Start page ------------------------------------------------

router.get(['/', '/index'], (req, res) => {
    res.render('index', { title: 'Lähimatkailu', current: 'index' });
});
//-------------------------------------------------------------

///LOGIN{{{{{{}}}}}}

//--------------------------------


//Login POST
router.post('/login',
  passport.authenticate('local', {
    successRedirect:'/index',
    failureRedirect: '/login' }));

/*
//Login POST 2
router.post('/login', (req, res) => passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login', })(req, res));
*/

//Login get 3
router.get( '/login', (req, res) => {
    res.render('login', { title: 'Kirjaudu Sisään', current: 'login' });
});

/*
//Login Get
router.get('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/index/' + req.user.username);
    });
  })(req, res, next);
});

*/


/*
//Login GET 2
router.get('/login', function(req, res, next, done) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err);}
    if (!user) return done(null, false, { message: 'Kirjaudu sisään!' });
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/index/' + user.username);
    });
  })(req, res, next);
});
*/

//----------------------------------


// Handle /kohteet.json route with index action from kohteet controller
//router.route('/kohteet.json').get(index);

router.get('/kohteet.json', (req, res, next) => {
	let location = req.query.location;
    let lat;
    let long;
    let dist;
    let regex = /\d+\.?\d*/;
	if (location === undefined || location.lat === undefined || location.long === undefined || location.dist === undefined || !location.lat.match(regex) || !location.long.match(regex) || !location.dist.match(regex)) {		
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

/* Directs the user using /new to  file new.pug where you can add a new place in database.*/
router.get('/new', (req, res) => {
    res.render('new', { title: 'Add a new destination', current: 'new' });
});

// Directs the user using /list to  file list.pug Where you can see all places in db and choose if you want to modify or delete them.
router.get('/list', (req, res) => {
    res.render('list', { title: 'List', current: 'list' });
});

//Delete
router.delete('/delete/:id', (req, res) =>{
    Kohde.findOne({ _id: req.params.id }, (err, response) => {
        
        // Copy target to a backup collection
        let swap = new (KohdeRemoved)(response);
        swap.isNew = true;
        swap.save();
        // Remove original
        response.remove();
        
        if(err) { res.json({message: "error deleting record id"}); }
        else { res.json({message: "Target has been deleted"}); }
    
    });   
});

router.get('/delete/:id', (req, res) => {
     let id = req.params.id;
    res.render('delete', { 
        id: id,
        title: 'DESTROY' });
    
});     
   
//MODIFY
router.get('/modify/:id', (req, res) => {
    let id = req.params.id;
    
    Kohde.findById(id, (err, kohde) => {
        if (err || !kohde) {
            res.send("There was a problem reading the information from the database.");
        } else {
            let type = kohde.type;
            let service, food, sight;
            
            if (type === "Food") {
                food = true;
            } else if (type === "Service") {
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
router.get('/view/:id', (req, res) => {
    let id = req.params.id;
    
    Kohde.findById(id, (err, kohde) => {
        if (err || !kohde) {
            res.send("There was a problem reading the information from the database.");
        } else {
            
            let type = kohde.type;
            
            if(type === "Nähtävyys") {
                type = "Sight";
            } else if(type === "Palvelu") {
                type = "Service";
            } else {
                type = "Food";
            }
            
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
                type: type,
                title: kohde.name
            });
        }
    });
});

//Posts filled form (new 'kohde') to database
router.post('/add', (req, res) => {

    let type = req.body.type;
    let name = req.body.name;
    let city = req.body.city;
    let postalCode = req.body.postalCode;
    let street = req.body.street;
    let phoneNumber = req.body.phoneNumber;
    let picture = req.body.picture;
    if(typeof(picture) !== "string")
        picture = picture.filter(n => n);
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let info = req.body.info;
    let monStart = req.body.monStart;
    let monEnd = req.body.monEnd;
    let tueStart = req.body.tueStart;
    let tueEnd = req.body.tueEnd;
    let wedStart = req.body.wedStart;
    let wedEnd = req.body.wedEnd;
    let thuStart = req.body.thuStart;
    let thuEnd = req.body.thuEnd;
    let friStart = req.body.friStart;
    let friEnd = req.body.friEnd;
    let satStart = req.body.satStart;
    let satEnd = req.body.satEnd;
    let sunStart = req.body.sunStart;
    let sunEnd = req.body.sunEnd;
    let objectId;
    if(req.body.id) {
       objectId = req.body.id;
    } else {
       objectId = new ObjectID();
    }

    // If latitude or longitude is empty, get them from Google Maps API
    if(latitude === "" || longitude === "") {
        googleMapsClient.geocode({
            address: street + ' ' + postalCode + ' ' + city
            })
            .asPromise()
            .then(response => {
                latitude = parseFloat(response.json.results[0].geometry.location.lat);
                longitude = parseFloat(response.json.results[0].geometry.location.lng);
                addData();
            })
            .catch(err => {
                console.log(err);
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
        ];
        


        newData.map(data => {
            const kohde = new Kohde(data);
            const query = { _id: objectId };
            
    
            
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
