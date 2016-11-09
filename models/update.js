const pool = require('../db/connection');


function update(charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits, acrobaticsskill, animalhandlingskill, arcanaskill, athleticsskill, deceptionskill, historyskill, insightskill, intimidationskill, investigationskill, medicineskill, natureskill, perceptionskill, performanceskill, persuasionskill, religionskill, sleightofhandskill, stealthskill, survivalskill, id) {
  return new Promise(function(resolve, reject){
      pool.connect(function(err, client, done){
        if (err) {
          done();
          return reject(err);
      }
        client.query('UPDATE characters SET charname=$1, charclass=$2, level=$3, background=$4, races=$5, alignment=$6, exp=$7, strength=$8, dexterity=$9, constitution=$10, intelligence=$11, wisdom=$12, charisma=$13, inspiration=$14, proficiency=$15, savingthrows=$16, perception=$17, otherproficiencies=$18, armor=$19, initiative=$20, speed=$21, currenthp=$22, temphp=$23, hitdice=$24, deathsaves=$25, attacksandspells=$26, equipment=$27, personality=$28, ideals=$29, bonds=$30, flaws=$31, featuresandtraits=$32, acrobaticsskill=$33, animalhandlingskill=$34, arcanaskill=$35, athleticsskill=$36, deceptionskill=$37, historyskill=$38, insightskill=$39, intimidationskill=$40, investigationskill=$41, medicineskill=$42, natureskill=$43, perceptionskill=$44, performanceskill=$45, persuasionskill=$46, religionskill=$47, sleightofhandskill=$48, stealthskill=$49, survivalskill=$50 WHERE id=$51',
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
