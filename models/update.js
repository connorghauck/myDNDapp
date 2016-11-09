const pool = require('../db/connection');


function update(userid, charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits, acrobaticsskill, animalhandlingskill, arcanaskill, athleticsskill, deceptionskill, historyskill, insightskill, intimidationskill, investigationskill, medicineskill, natureskill, perceptionskill, performanceskill, persuasionskill, religionskill, sleightofhandskill, stealthskill, survivalskill) {
  return new Promise(function(resolve, reject){
console.log(req.params.id);
      pool.connect(function(err, client, done){
        if (err) {
          done();
          return reject(err);
      }  //column=value for all of these shits. WHERE is giong to be specific to the id.  id=req.params.id
        client.query('UPDATE characters (charname=$1, charclass=(SELECT classes.id FROM classes WHERE classes.class LIKE $2), level=$3, background=$4, races=(SELECT races.id FROM races WHERE races.race LIKE $5), alignment=(SELECT alignments.id FROM alignments WHERE alignments.alignment LIKE $6), exp=$8, strength=$9, dexterity=$10, constitution=$11, intelligence=$12, wisdom=$13, charisma=$14, inspiration=$15, proficiency=$16, savingthrows=$17, perception=$18, otherproficiencies=$19, armor=$20, initiative=$21, speed=$22, currenthp=$23, temphp=$24, hitdice=$25, deathsaves=$26, attacksandspells=$27, equipment=$28, personality=$29, ideals=$30, bonds=$31, flaws=$32, featuresandtraits=$33, acrobaticsskill=$34, animalhandlingskill=$35, arcanaskill=$36, athleticsskill=$37, deceptionskill=$38, historyskill=$39, insightskill=$40, intimidationskill=$41, investigationskill=$42, medicineskill=$43, natureskill=$44, perceptionskill=$45, performanceskill=$46, persuasionskill=$47, religionskill=$48, sleightofhandskill=$49, stealthskill=$50, survivalskill=$51) WHERE id=$52',
                     [charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits, acrobaticsskill, animalhandlingskill, arcanaskill, athleticsskill, deceptionskill, historyskill, insightskill, intimidationskill, investigationskill, medicineskill, natureskill, perceptionskill, performanceskill, persuasionskill, religionskill, sleightofhandskill, stealthskill, survivalskill, id],

                     function(err, result){
                       done();
                       if (err) {
                         return reject(err);
                       }
                       resolve(result.rows[0]);
                     });
      });
  });
}


module.exports = {
    update: update
};
