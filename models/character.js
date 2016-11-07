const pool = require('../db/connection');


function create(userid, charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits) {
  return new Promise(function(resolve, reject){

      pool.connect(function(err, client, done){
        if (err) {
          done();
          return reject(err);
        }
        client.query('INSERT INTO characters (userid, charname, charclass, level, background, races, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits) VALUES ($1, $2, $3, $4, $5, (SELECT races.id FROM races WHERE races.race LIKE $6), (SELECT alignments.id FROM alignments WHERE alignments.alignment LIKE $7), $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33) RETURNING *',
                     [userid, charname, charclass, level, background, race, alignment, exp, strength, dexterity, constitution, intelligence, wisdom, charisma, inspiration, proficiency, savingthrows, perception, otherproficiencies, armor, initiative, speed, currenthp, temphp, hitdice, deathsaves, attacksandspells, equipment, personality, ideals, bonds, flaws, featuresandtraits],

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
