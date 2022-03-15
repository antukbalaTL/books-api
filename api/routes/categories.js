const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    res.json({
        categories: 'working get categories'
    });
});


router.post('/', (req, res, next) => {
    res.json({
        categories: 'working post categories'
    });
});


router.patch('/', (req, res, next) => {
    res.json({
        categories: 'working patch categories'
    });
});


router.delete('/', (req, res, next) => {
    res.json({
        categories: 'working delete categories'
    });
});


module.exports = router;
