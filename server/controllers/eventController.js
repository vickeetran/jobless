const Event = require('../models/eventModel');

module.exports = {
  get: (req, res) => {
    Event.get(req.params.id, (err, data) => {
      if (err) throw err;
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.send(data);
    });
  },
  post: (req, res) => {
    Event.post(req.body.event, err => {
      if (err) throw err;
      res.sendStatus(201);
    });
  },
  put: (req, res) => {
    Event.put(req.body.event, err => {
      if (err) throw err;
      res.sendStatus(201);
    });
  },
};
