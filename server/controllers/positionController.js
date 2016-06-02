const Position = require('../models/positionModel');

module.exports = {
  get: (req, res) => {
    Position.get(req.params.id, (err, data) => {
      if (err) throw err;
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.send(data);
    });
  },
  post: (req, res) => {
    Position.post(req.body.position, err => {
      if (err) throw err;
      res.sendStatus(201);
    });
  },
  put: (req, res) => {
    Position.put(req.body.position, err => {
      if (err) throw err;
      res.sendStatus(201);
    });
  },
};
