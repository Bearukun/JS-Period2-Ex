var mymodule = require('./exercise6module.js');

var dir = process.argv[2];
var filter = process.argv[3];

mymodule(dir, filter, function(err, list){
    if(err){
        throw err;
    }else{
        list.forEach(function(element) {
            console.log(element);
        }, this);
    }
})