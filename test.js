var tap = require('tap');
var test = tap.test;
var bynt = require('./index');

test('works?', function(t){
  bynt(function(err, bint){
    t.is(typeof bint, 'number', 'Int is a number');
    t.ok(bint > 0, 'Int is a positive number');
    tap.output.write('int is ' + bint);
    t.end();
  });
});