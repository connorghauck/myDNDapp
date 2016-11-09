const router = require('express').Router();
const Update = require('../models/update');

router.put('/:id', function(req, res) {
    console.log('creating new character');
        Update.update(req.body.charname, req.body.charclass, req.body.level, req.body.background, req.body.races, req.body.alignment, req.body.exp, req.body.strength, req.body.dexterity, req.body.constitution, req.body.intelligence, req.body.wisdom,
        req.body.charisma, req.body.inspiration, req.body.proficiency, req.body.savingthrows, req.body.perception, req.body.otherproficiencies, req.body.armor,
        req.body.initiative, req.body.speed, req.body.currenthp, req.body.temphp,
        req.body.hitdice, req.body.deathsaves,
        req.body.attacksandspells, req.body.equipment, req.body.personality, req.body.ideals,
        req.body.bonds, req.body.flaws, req.body.featuresandtraits, req.body.acrobaticsskill, req.body.animalhandlingskill, req.body.arcanaskill, req.body.athleticsskill, req.body.deceptionskill, req.body.historyskill, req.body.insightskill, req.body.intimidationskill, req.body.investigationskill, req.body.medicineskill, req.body.natureskill,
        req.body.perceptionskill, req.body.performanceskill, req.body.persuasionskill, req.body.religionskill, req.body.sleightofhandskill, req.body.stealthskill, req.body.survivalskill, req.body.id).then(function() {
        res.sendStatus(201);
    }).catch(function(err){
        console.log('Error in /sheet', err);
        res.sendStatus(500);
    });
});

module.exports = router;
