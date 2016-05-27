var userController = require('./controllers/userController');
var eventController = require('./controllers/eventController');
var positionController = require('./controllers/positionController');
var router = require('express').Router();

router.get('/user', userController.get);
router.post('/user', userController.post);
router.put('/user', userController.put);

router.get('/event', eventController.get);
router.post('/event', eventController.post);
router.put('/event', eventController.put);

router.get('/position', positionController.get);
router.post('/position', positionController.post);
router.put('/position', positionController.put);

module.exports = router;