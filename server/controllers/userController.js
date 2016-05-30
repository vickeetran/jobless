const User = require('../models/userModel');

module.exports = {
  get: (req, res) => {
    User.get(req.params.id, (err, data) => {
      if (err) throw err;
      res.send(data);
    });
  },
  post: (req, res) => {
    User.post(req.body.user, err => {
      if (err) throw err;
      res.sendStatus(201);
    });
  },
  put: (req, res) => {
    User.put(req.body.user, err => {
      if (err) throw err;
      res.sendStatus(201);
    });
  },
};
