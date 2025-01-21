const router = require('express').Router();
const riotRouter = require('./riotApi');

router.use('/riot', riotRouter);

module.exports = router