let createError = require('http-errors');
let express = require('express');
let path = require('path');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
