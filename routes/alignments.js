const router = require('express').Router();
const Alignment = require('../models/alignments');

router.get('/', function(req, res){
    console.log('beginning get request for alignments');
    Alignment.getList().then(function(alignments){
        res.send(alignments);
        console.log('successful alignments get request');
    }).catch(function(err){
        console.log('error', err);
        res.sendStatus(500);
    });
});

module.exports = router;
