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
  complete: false,
  endDate: Date.now(),
  jobURL: 'https://www.google.com/about/careers/search?src=Online/Job+Board/indeed&utm_source=indeed&utm_medium=jobaggr&utm_campaign=freeaggr#!t=jo&jid=191565001',
  apply: true,
  notes: 'You go girl!',
  userId: 1,
});

db.Position.create({
  title: 'Software Engineer',
  company: 'Facebook',
  description: 'Mark who?',
  complete: false,
  endDate: Date.now(),
  jobURL: 'https://www.facebook.com/careers/jobs/a0IA0000006cPYBMA2/',
  apply: true,
  notes: 'Must master React!',
  userId: 1,
});

db.Position.create({
  title: 'Astronaut',
  company: 'NASA',
  description: 'Take me to the moon',
  complete: false,
  endDate: Date.now(),
  jobURL: 'https://careers-virgingalactic.icims.com/jobs/2212/spaceship-propulsion-design-and-manufacturing-engineer/job?mode=job&iis=Indeed&iisn=Indeed&mobile=false&width=692&height=500&bga=true&needsRedirect=false&jan1offset=-480&jun1offset=-420',
  apply: true,
  notes: 'Look super fly for interview day!!',
  userId: 1,
});

db.Position.create({
  title: 'Chef',
  company: 'Gordon Ramsey',
  description: 'Food is fire',
  complete: false,
  endDate: Date.now(),
  jobURL: 'https://sjobs.brassring.com/TGWEbHost/jobdetails.aspx?partnerid=25377&siteid=5169&Areq=27602BR&codes=IND',
  apply: true,
  notes: 'The way to the heart is through the stomach',
  userId: 1,
});

db.Position.create({
  title: 'Chief Morale Officer',
  company: 'Hack Reactor',
  description: 'Eat-sleep-hack-eat-repeat',
  complete: false,
  endDate: Date.now(),
  jobURL: 'http://www.hackreactor.com/careers/',
  apply: true,
  notes: 'You can do it!',
  userId: 1,
});

db.Position.create({
  title: 'Software Engineer',
  company: 'Amazon',
  description: ' ',
  complete: false,
  endDate: Date.now(),
  jobURL: 'https://www.amazon.jobs/en/job_categories/software-development',
  apply: true,
  notes: 'Two words: Ship it!',
  userId: 1,
});

db.Position.create({
  title: 'Software Engineer',
  company: 'Yelp',
  description: 'Product Development Team',
  complete: false,
  endDate: Date.now(),
  jobURL: 'http://www.yelp.com/careers/job-openings/cdefb0de-1998-4814-b459-c4417ef94efc?description=Software-Engineer-New-Grad_College-Engineering-Product_San-Francisco-CA&lever-source=indeed',
  apply: false,
  notes: 'Must master React!',
  userId: 1,
});

db.Position.create({
  title: 'Software Engineer',
  company: 'Pinterest',
  description: 'Community Ops and Trust & Safety Team',
  complete: false,
  endDate: Date.now(),
  jobURL: 'http://jobs.bvp.com/jobdetail.php?jobid=526487',
  apply: false,
  notes: 'Must master React!',
  userId: 1,
});

db.Event.create({
  description: 'Phone Interview',
  interviewers: 'Beyonce',
  note: 'Build a fullstack app before the interview.',
  complete: false,
  emotion: 'Hot!!',
  dateEvent: Date.now(),
  questions: 'Can you build a robot that cleans my house using Angular, node and Mysql?',
  positionId: 1,
});

db.Event.create({
  description: 'In-person Interview',
  interviewers: 'Bernie Sanders',
  note: 'Help Bernie save the world!',
  complete: false,
  emotion: 'delighted!!!',
  dateEvent: Date.now(),
  questions: 'Please build a single page app using React in 10 seconds.',
  positionId: 2,
});

db.Event.create({
  description: 'Phone Interview',
  interviewers: 'Mini Blue Bird',
  note: 'Practice toy problems and tweet a million times before interview day.',
  complete: false,
  emotion: 'chirpy',
  dateEvent: Date.now(),
  questions: 'Please draw a circle.',
  positionId: 3,
});

db.Event.create({
  description: 'Coffee Interview',
  interviewers: 'Bill Gates',
  note: 'Give a talk on how to succeed at Hack Reactor!',
  complete: false,
  emotion: 'EXCITED!!!!!!',
  dateEvent: Date.now(),
  questions: 'What is your favorite ice cream?',
  positionId: 4,
});

db.Event.create({
  description: 'Social night',
  interviewers: 'Taylor Swift',
  note: 'Practice toy problems and tweet a million times before interview day.',
  complete: false,
  emotion: 'chirpy',
  dateEvent: Date.now(),
  questions: 'Please draw a perfect circle with D3.',
  positionId: 1,
});

db.Event.create({
  description: 'Hackathon',
  interviewers: 'Elon Musk',
  note: 'Give a talk on how to succeed at Hack Reactor!',
  complete: false,
  emotion: 'EXCITED!!!!!!',
  dateEvent: Date.now(),
  questions: 'What is your favorite ice cream?',
  positionId: 1,
});

db.Event.create({
  description: 'meeting',
  interviewers: 'Mark Zuck',
  note: 'Give a talk on how to succeed at Hack Reactor!',
  complete: false,
  emotion: 'EXCITED!!!!!!',
  dateEvent: Date.now(),
  questions: 'What is your favorite ice cream?',
  positionId: 1,
});
