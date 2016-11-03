const pool = require('../db/connection');


function create(charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits) {
  return new Promise(function(resolve, reject){

      pool.connect(function(err, client, done){
        if (err) {
          done();
          return reject(err);
        }

        client.query('INSERT INTO characters (charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32) RETURNING *',
                     [charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits],
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
    create: create
};
