/* eslint-disable no-console */
const Event = require('../models/eventModel');

module.exports = {
  // Get all Events
  getAll: (req, res) => {
    Event.findAll()
      .then(events => res.send(events))
      .catch(res.send(500));
  },
  // Get Event by ID
  get: (req, res) => {
    Event.findOne({ where: { id: req.params.id } })
      .then(event => res.send(event))
      .catch(res.send(500));
  },
  // Create Event
  post: (req, res) => {
    Event.create(req.body.event)
      .then(res.send())
      .catch(res.send(500));
  },
  // Update Event
  put: (req, res) => {
    Event.findOne({ where: { id: req.body.event.id } })
      .then(event => event.update(req.body.event))
      .catch(res.send(500));
  },
};
