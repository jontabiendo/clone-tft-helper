const router = require('express').Router();
const apiRouter = require('./riotApi');

router.use('/riot', apiRouter);

module.exports = router