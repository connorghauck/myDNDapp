const router = require('express').Router();
const Characters = require('../models/characters');

router.get('/', function(req, res){
    console.log('beginning get request for characters');
    Characters.getList().then(function(characters){
        res.send(characters);
        console.log('successful characters get request');
    }).catch(function(err){
        console.log('error', err);
        res.sendStatus(500);
    });
});

module.exports = router;
