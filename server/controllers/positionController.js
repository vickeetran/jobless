/* eslint-disable no-console */
const Position = require('../models/positionModel');

module.exports = {
  // Get all Positions
  getAll: (req, res) => {
    Position.findAll()
      .then(positions => res.send(positions))
      .catch(res.send(500));
  },
  // Get Position by ID
  get: (req, res) => {
    Position.findOne({ where: { id: req.params.id } })
      .then(position => res.send(position))
      .catch(res.send(500));
  },
  // Create Position
  post: (req, res) => {
    Position.create(req.body.position)
      .then(res.send())
      .catch(res.send(500));
  },
  // Update Position
  put: (req, res) => {
    Position.findOne({ where: { id: req.body.position.id } })
      .then(position => position.update(req.body.position))
      .catch(res.send(500));
  },
};
