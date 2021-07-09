const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');

const indexRouter = require('./routes/index');
const catsRouter = require('./routes/cats');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(
  process.env.DB_CONNECTION,
  {useNewUrlParser: true },
  () => console.log('connected to db...')
);

app.use('/', indexRouter);
app.use('/cats', catsRouter);

app.listen('5000');