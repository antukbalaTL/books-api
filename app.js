const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');


const booksRoute = require('./api/routes/books');
const usersRoute = require('./api/routes/users');
const authorsRoute = require('./api/routes/authors');
const categoriesRoute = require('./api/routes/categories');


app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(morgan('dev'));


app.use('/books', booksRoute);
app.use('/users', usersRoute);
app.use('/authors', authorsRoute);
app.use('/categories', categoriesRoute);
app.use((req, res, next) => {
    res.json({
        message: 'working'
    });
});

module.exports = app;
