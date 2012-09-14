var request=require('request');
var api = 'http://api.brooklynintegers.com/rest/';

var opt = {
  uri: api,
  method: 'POST',
  form: {
    method: 'brooklyn.integers.create'
  }
};

var requestCb = function(cb){
  return function(err, resp, body){
    if(err) return cb(err);
    var bynt;
    try{
      bynt = JSON.parse(body);
    }catch(e){}
    if(!bynt) return cb(new Error('bad body'));
    if(bynt.error) return cb(new Error(bynt.error.error));
    var bint = bynt.integers.pop().integer;
    cb(err, bint);
  }
};

module.exports = function(cb){
  request(opt, requestCb(cb));
};
