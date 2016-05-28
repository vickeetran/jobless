// eslint-disable-next-line new-cap
const router = require('express').Router();
const userController = require('./controllers/userController');
const eventController = require('./controllers/eventController');
const positionController = require('./controllers/positionController');

router.get('/user', userController.getAll);
router.get('/user/:id', userController.get);
router.post('/user', userController.post);
router.put('/user', userController.put);

router.get('/event', eventController.getAll);
router.get('/event/:id', eventController.get);
router.post('/event', eventController.post);
router.put('/event', eventController.put);

router.get('/position', positionController.getAll);
router.get('/position', positionController.get);
router.post('/position', positionController.post);
router.put('/position', positionController.put);

module.exports = router;
