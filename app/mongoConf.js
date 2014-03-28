var Mongoose = require('mongoose');
var path = require('path');
var mongoURI = process.env.MONGO_DB_URI || 'mongodb://localhost/test';
Mongoose.connect(mongoURI);

var db = Mongoose.connection;

// if there's an error connecting to the db
db.on('error', function (e) { console.log('error: ', e)});

// // on success
// db.once('open', function(){
//   console.log('inside mongoose once callback func');
// });

// equivalent to creating a 'table' in sql

module.exports = Mongoose;


