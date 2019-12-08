const express = require('express')
const router = express.Router()
const user = require('./user')
const company = require('./company')
const engineer = require('./engineer')
const app = require('./myhire')
const hire = require('./hire')
var path = require('path');
const {
    tokenVerify
} = require('../controllers/auth')

router.use('/user', tokenVerify, user)
router.use('/engineer', engineer)
router.use('/company', company)
router.use('/myhire', app)
router.use('/hire',hire)
router.get('/', (req, res) => {
    res.send('Hello World')
});

module.exports = router