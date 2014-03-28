var db = require('../config');
var Mongoose = require('../mongoConf.js');
var crypto = require('crypto');

// var Link = db.Model.extend({
//   tableName: 'urls',
//   hasTimestamps: true,
//   defaults: {
//     visits: 0
//   },
//   initialize: function(){
//     this.on('creating', function(model, attrs, options){
//       var shasum = crypto.createHash('sha1');
//       shasum.update(model.get('url'));
//       model.set('code', shasum.digest('hex').slice(0, 5));
//     });
//   }
// });

var urlSchema = Mongoose.Schema({
  url:String,
  base_url:String,
  code:String,
  title:String,
  visits:Number,
  createdAt:{ type:Date, default: Date.now }
});

urlSchema.pre('save', function(next){
  var shasum = crypto.createHash('sha1');
  shasum.update(this.url);
  this.code = shasum.digest('hex').slice(0,5);
  next();
})

var Link = Mongoose.model('Link', urlSchema);

module.exports = Link;


// var test = new Link({url:'http://isItHashing.com', base_url:'http://127.0.0.1:4568', code:'', title:'google',visits:0})
// console.log(test);
// test.save(function(err, test){
//   if(err){
//     return console.log(err);
//   }
//   console.log(test.url);
// });