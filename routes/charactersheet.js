const router = require('express').Router();
const Character = require('../models/character');

router.post('/', function(req, res) {
    console.log('creating new character');
    console.log(req.body.characterRace);
    Character.create(req.user.id, req.body.characterName, req.body.characterClass.class, req.body.characterLevel, req.body.characterBackground, req.body.characterRace.race, req.body.charAlign.alignment, req.body.characterExp, req.body.characterStr,
        req.body.characterDex, req.body.characterConst, req.body.characterInt, req.body.characterWis,
        req.body.characterChar, req.body.characterInsp, req.body.characterProfBonus, req.body.characterSavingThrows, req.body.characterPercep, req.body.characterLanguages, req.body.characterArmor,
        req.body.characterInit, req.body.characterSpeed, req.body.characterCurrHp, req.body.characterTempHp,
        req.body.characterHitDice, req.body.characterDeathSaves,
        req.body.characterAttacksAndSpells, req.body.characterEquipment, req.body.characterPers, req.body.characterIdeals,
        req.body.characterBonds, req.body.characterFlaws, req.body.characterFeaturesTraits).then(function() {
        res.sendStatus(201);
    }).catch(function(err){
        console.log('Error in /sheet', err);
        res.sendStatus(500);
    });
});

module.exports = router;
