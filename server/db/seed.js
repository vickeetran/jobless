const db = require('./index');

db.User.create({
  firstName: 'John',
  lastName: 'Doe',
  email: 'some@email.com',
});

db.User.create({
  firstName: 'Mary',
  lastName: 'Jane',
  email: 'some@email.com',
});

db.Position.create({
  title: 'Software Engineer',
  company: 'Google',
  description: 'Best job evah',
  userId: 1,
});

db.Position.create({
  title: 'Software Engineer',
  company: 'Facebook',
  description: 'Mark who?',
  userId: 2,
});

db.Position.create({
  title: 'Astronaut',
  company: 'NASA',
  description: 'Take me to the moon',
  userId: 1,
});

db.Position.create({
  title: 'Chef',
  company: 'Gordon Ramsey',
  description: 'Food is fire',
  userId: 1,
});

db.Event.create({
  company: 'Goooooogle',
  date: Date.now(),
  description: 'Cool stuff',
  isInterview: true,
  interviewers: 'Lots of people',
  note: 'I got dis',
  complete: false,
  image: 'ahhhhhhhh',
  emotion: 'EXCITED!!!!!!',
  positionId: 1,
});
