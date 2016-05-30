// position:
//  id: integer
//  title: string
//  company: string
//  description: string
//  UserId: integer
const db = require('./../db');

module.exports = {
  get: (id, cb) => {
    if (id) {
      db.Position.findOne({ where: { id } })
        .then(position => cb(null, position))
        .catch(cb);
    } else {
      db.Position.findAll()
        .then(positions => cb(null, positions))
        .catch(cb);
    }
  },
  post: (newPosition, cb) => {
    db.Position.create(newPosition)
      .then(() => cb())
      .catch(cb);
  },
  put: (positionChanges, cb) => {
    db.Position.findOne({ where: { id: positionChanges.id } })
      .then(position => position.update(positionChanges))
      .then(() => cb())
      .catch(cb);
  },
};
