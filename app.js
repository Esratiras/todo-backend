const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const bodyParser = require('body-parser')
const todo = require("./routes/todo")

const mongoose = require('mongoose')
const cors= require('cors')
const app = express();
const router = express.Router()

mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true, useUnifiedTopology: true})

mongoose.connection.on('open', () => {
  console.log('MongoDb Connected Successfully')
})

mongoose.connection.on('error', (err) => {
  console.log('MongoDb Connection Error',err)
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', indexRouter);
app.use('/todos', todo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
