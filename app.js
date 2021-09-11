var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventRouter = require('./routes/event');
var cors = require ('cors')
const connectDB = require('./config/db');

var app = express();

// Connect Database
connectDB();
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/event', eventRouter)


// Set static folder
// if ( process.env.NODE_ENV === 'production') {
//     app.use(express.static('calendar/build'))
//     app.get('*', (req, res)=> 
//     res.sendFile(path.resolve(__dirname, 'calendar', 'build', 'index.html')))
// }




module.exports = app;