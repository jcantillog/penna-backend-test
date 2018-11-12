// Importing global variables
var createError   = require('http-errors');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
var express       = require('express');
var mongoose      = require('mongoose');
var path          = require('path');
var cors          = require('cors');

// Setting connection
mongoose.connect
(
    'mongodb://root:bdatos1234@ds157383.mlab.com:57383/penna',
    {useNewUrlParser: true}
);

// Setting routers
var indexRouter     = require('./interfaces/http/routes/index');
var parentsRouter   = require('./interfaces/http/routes/parents');
var projectsRouter  = require('./interfaces/http/routes/projects');

// Setting express app
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Setting CORS
app.use(cors());

// Setting endpoints
app.use('/', indexRouter);
app.use('/parents', parentsRouter);
app.use('/projects', projectsRouter);

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
