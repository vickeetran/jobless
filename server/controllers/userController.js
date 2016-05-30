/* eslint-disable no-console */
const User = require('../models/userModel');

module.exports = {
  // Get all Users
  getAll: (req, res) => {
    User.findAll()
      .then(users => res.send(users))
      .catch(res.send(500));
  },
  // Get User by ID
  get: (req, res) => {
    User.findOne({ where: { id: req.params.id } })
      .then(user => res.send(user))
      .catch(res.send(500));
  },
  // Create User
  post: (req, res) => {
    User.create(req.body.user)
      .then(res.send())
      .catch(res.send(500));
  },
  // Update User
  put: (req, res) => {
    User.findOne({ where: { id: req.body.user.id } })
      .then(user => user.update(req.body.user))
      .catch(res.send(500));
  },
};
