require("./connection");
User = require("./models/user");

// get all the users
User.find({}, function(err, users) {
    if (err) throw err;
  
    // object of all the users
    console.log(users);
  });

// get the user starlord55
User.find({ username: 'sevilayha' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});