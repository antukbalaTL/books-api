const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({
        users: 'working get users'
    });
});


router.post('/', (req, res, next) => {
    res.json({
        users: 'working post users'
    });
});


router.patch('/', (req, res, next) => {
    res.json({
        users: 'working patch users'
    });
});


router.delete('/', (req, res, next) => {
    res.json({
        users: 'working delete users'
    });
});


module.exports = router;
