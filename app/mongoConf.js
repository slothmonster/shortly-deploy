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

var urlSchema = Mongoose.Schema({
  url:String,
  base_url:String,
  code:String,
  title:String,
  visits:Number,
  createdAt:{ type:Date, default: Date.now }
});

var Link = Mongoose.model('Link', urlSchema);

var test = new Link({url:'http://adam.com', base_url:'http://127.0.0.1:4568', code:'890467', title:'google',visits:0})
console.log(test);
test.save(function(err, test){
  if(err){
    return console.log(err);
  }
  console.log(test.url);
});
