const router = require('express').Router();
const CharClass = require('../models/charclass');
 
router.get('/', function(req, res){
    console.log('beginning get request for classes');
    CharClass.getList().then(function(classes){
        res.send(classes);
        console.log('successful classes get request');
    }).catch(function(err){
        console.log('error', err);
        res.sendStatus(500);
    });
});

module.exports = router;
