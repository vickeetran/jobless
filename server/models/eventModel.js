var db = require('../db');

module.exports = {
  get: callback => {
    // let queryStr = 
    db.query(queryStr, function(err, results) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  post: (params, callback) => {
    // let queryStr =
    db.query(queryStr, function(err, results) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  },

  put: (params, callback) => {
    // let queryStr = 
    db.query(queryStr, function(err, results) {
      if(err) {
        callback(err, null);
      } else {
        callback(null, results);
      }
    });
  }
};