// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const picturesRouter = require('./pictures.js')

router.use('/pictures', picturesRouter)
router.use('/session', sessionRouter);
router.use('/users', usersRouter);


module.exports = router;
