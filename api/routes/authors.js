const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({
        authors: 'working get authors'
    });
});


router.post('/', (req, res, next) => {
    res.json({
        authors: 'working post authors'
    });
});


router.patch('/', (req, res, next) => {
    res.json({
        authors: 'working patch authors'
    });
});


router.delete('/', (req, res, next) => {
    res.json({
        authors: 'working delete authors'
    });
});


module.exports = router;
