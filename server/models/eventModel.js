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
        .then(event => cb(null, event))
        .catch(cb);
    } else {
      db.Event.findAll()
        .then(events => cb(null, events))
        .catch(cb);
    }
  },
  // Create Event
  post: (newEvent, cb) => {
    db.Event.create(newEvent)
      .then(() => cb())
      .catch(cb);
  },
  // Update Event
  put: (eventChanges, cb) => {
    db.Event.findOne({ where: { id: eventChanges.id } })
      .then(event => event.update(eventChanges))
      .then(() => cb())
      .catch(cb);
  },
};
