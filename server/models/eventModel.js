// events:
//  id: integer
//  description: string
//  date: timestamp
//  company: string
//  isInterview: boolean
//  interviewers: array of strings
//  positionId: integer
//  image: string
//  emotion: string
//  note: string
//  complete: boolean
//  followUp: object
//  UserId: integer
const db = require('./../db/index.js');

module.exports = {
  get: (id, cb) => {
    if (id) {
      db.Event.findOne({ where: { id } })
        .then( event => cb(null, event))
        .catch(cb);
    } else {
      db.Event.findAll({ order: [['createdAt', 'DESC']] })
        .then( events => cb(null, events))
        .catch(cb);
    }
  },
  // Create Event
  post: (newEvent, cb) => {
    db.Event.create(newEvent)
      .then( e => cb(null, e))
      .catch(cb);
  },
  // Update Event
  put: (eventChanges, cb) => {
    db.Event.findOne({ where: { id: eventChanges.id } })
      .then(event => event.update(eventChanges))
      .then( e => cb(null, e))
      .catch(cb);
  },

  remove: (oldEvent, cb) => {
    db.Event.findOne({ where: { id: oldEvent.id } })
      .then(event => event.destroy())
      .then((e) => cb(null, e))
      .catch(cb);
  }
};
