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

db.Position.create({
  title: 'Chief Morale Officer',
  company: 'Hack Reactor',
  description: 'Eat-sleep-hack-eat-repeat',
  userId: 1,
});

db.Position.create({
  title: 'Amazing Senior',
  company: 'Hack Reactor',
  description: 'Eat-sleep-hack-eat-shower-repeat',
  userId: 1,
});

db.Event.create({
  company: 'Talent Co.',
  date: Date.now(),
  description: 'Phone Interview',
  isInterview: true,
  interviewers: 'Beyonce',
  note: 'I got dis',
  complete: false,
  image: 'ahhhhhhhh',
  emotion: 'Hot!!',
  positionId: 1,
});

db.Event.create({
  company: 'Save the Planet',
  date: Date.now(),
  description: 'In-person Interview',
  isInterview: true,
  interviewers: 'Bernie Sanders',
  note: 'I got dis',
  complete: false,
  image: 'ahhhhhhhh',
  emotion: 'delighted!!!',
  positionId: 1,
});

db.Event.create({
  company: 'Twitter',
  date: Date.now(),
  description: 'Twitter Interview',
  isInterview: true,
  interviewers: 'Mini Blue Bird',
  note: 'I got dis',
  complete: false,
  image: 'ahhhhhhhh',
  emotion: 'chirpy',
  positionId: 1,
});

db.Event.create({
  company: 'Hack Reactor',
  date: Date.now(),
  description: 'Coffee Interview',
  isInterview: true,
  interviewers: 'Bill Gates',
  note: 'You got this',
  complete: false,
  image: 'ahhhhhhhh',
  emotion: 'EXCITED!!!!!!',
  positionId: 1,
});