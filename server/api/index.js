const router = require('express').Router();

// put your api routes here, for example:

// router.use('/students', require('./students'))

router.use('/cards', require('./cards.js'))

router.use('/auth', require('./auth.js'))

module.exports = router;