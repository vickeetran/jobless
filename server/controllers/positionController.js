/* eslint-disable no-console */
const models = require('../models/positionModel');

module.exports = {
  getAll: (req, res) => {
    res.send();
  },
  get: (req, res) => {
    models.get((err, results) => {
      if (err) {
        console.log('error getting position data');
      }
      res.json(results);
    });
  },

  post: (req, res) => {
    models.post(err => {
      if (err) {
        console.log('error posting position data');
      }
      res.send(201);
    });
  },

  put: (req, res) => {
    models.put(err => {
      if (err) {
        console.log('error updating position data');
      }
      res.send(201);
    });
  },
};
