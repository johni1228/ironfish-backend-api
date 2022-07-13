const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

// the app object
const app = express();
const port = 3000;

// router objects
const indexRouter = require('./routes/index');

// app config
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// configure app to use these routes
app.use('/', indexRouter);

// catch 404, forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, function () {
  console.log('Ironfish backend app listening on port ' + port + '!');
});

// expose this app to scripts that require it, i.e. myapp/bin/www
module.exports = app;