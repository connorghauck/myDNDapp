const pool = require('../db/connection');

function getList(){
    return new Promise(function(resolve, reject){
        pool.connect(function(err, client, done){
          if (err) {
            done();
            return reject(err);
          }
          client.query('SELECT * FROM alignments',
      function(err, result){
          done();
          if(err){
              console.log('error in model', err);
              return reject(err);
          }

          resolve(result.rows);
      });

  });
});
}
module.exports = {
    getList: getList
};
