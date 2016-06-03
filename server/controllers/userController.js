const User = require('../models/userModel');

module.exports = {
  get: (req, res) => {
    User.get(req.params.id, (err, data) => {
      if (err) throw err;
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
      res.send(data);
    });
  },
  post: (req, res) => {
    User.post(req.body, (err, data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  },
  put: (req, res) => {
    User.put(req.body, (err, data) => {
      if (err) throw err;
      res.status(201);
      res.send(data);
    });
  },
};
