var Mongoose = require('mongoose');
var path = require('path');

Mongoose.connect('mongodb://localhost/test');
var db = Mongoose.connection;

// if there's an error connecting to the db
db.on('error', function (e) { console.log('error: ', e)});

// // on success
// db.once('open', function(){
//   console.log('inside mongoose once callback func');
// });

// equivalent to creating a 'table' in sql

module.exports = Mongoose;


