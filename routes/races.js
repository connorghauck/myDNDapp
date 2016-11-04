const router = require('express').Router();
const Races = require('../models/races');

router.get('/', function(req, res){
    console.log('beginning get request for races');
    Races.getList().then(function(races){
        res.send(races);
        console.log('successful races get request');
    }).catch(function(err){
        console.log('error', err);
        res.sendStatus(500);
    });
});

module.exports = router;
