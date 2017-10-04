var mongoose = require("mongoose");
require("./connection");


//Define a schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
    name: String,
    a_date: Date
});

//Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema);

// Create an instance of model SomeModel
var awesome_instance = new SomeModel({ name: 'awesome' , a_date: new Date().getDate() });

// Save the new model instance, passing a callback
awesome_instance.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

SomeModel.create({ name: 'also_awesome' }, function (err, awesome_instance) {
    if (err) return handleError(err);
    // saved!
  });

  // Access model field values using dot notation
console.log(awesome_instance.name); //should log 'also_awesome'

// Change record by modifying the fields, then calling save().
awesome_instance.name="New cool name";
awesome_instance.save(function (err) {
   if (err) return handleError(err); // saved!
   });