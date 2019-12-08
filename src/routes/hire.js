const express = require('express')
const router = express.Router()

const {
    createHire,
    readHire,
    readHireby,
    
} = require('../controllers/hire')



router

    .post('/create', createHire)
    .get('/read', readHire)
    .get('/by/:id', readHireby)
    .get('/test', (req, res) => {
        res.send('Hello, Hire!')
    });

module.exports = router