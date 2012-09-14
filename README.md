brooklynintegers
===

NodeJS api for http://www.brooklynintegers.com the Hella-beautiful artisanally hand-crafted integers as a service.

No affiliation with http://www.missionintegers.com/

````javascript
var bynt = require('brooklynintegers');
bynt(function(err, bynteger){
  console.log('Your handcrafted artisanally made brooklyn integer is: ' + bynteger);
});
````