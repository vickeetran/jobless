var models = require('../models/userModel');

module.exports = {
  get: (req, res) => {
    models.get((err, results) => {
      if(err) {
        console.log('error getting event data');
      }
      res.json(results);
    });
  },

  post: (req, res) => {
    models.post(err => {
      if(err) {
        console.log('error posting event data');
      } 
      res.send(201);
    }); 
  },

  put: (req, res) => {
    models.put(err => {
      if(err) {
        console.log('error updating event data');
      }
      res.send(201);
    });
  }
};