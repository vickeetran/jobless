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
    Position.post(req.body, (err,data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  },
  put: (req, res) => {
    Position.put(req.body, (err, data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  },
  remove: (req, res) => {
    Position.remove(req.body, (err, data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  }
};
