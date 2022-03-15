const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({
        books: 'working get books'
    });
});


router.post('/', (req, res, next) => {
    res.json({
        books: 'working post books'
    });
});


router.patch('/', (req, res, next) => {
    res.json({
        books: 'working patch books'
    });
});


router.delete('/', (req, res, next) => {
    res.json({
        books: 'working delete books'
    });
});


module.exports = router;
