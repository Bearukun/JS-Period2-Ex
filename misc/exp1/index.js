const express = require('express')
const app = express()

app.use(function(req, res, next){
  const date = new Date();
  console.log(date.toISOString());
  const day = date.getDate();
  const month = date.getMonth()+1;
  const year = date.getFullYear();
  req.dateInfo = `${day}/${month} - ${year}`;
  next();
});

app.get('/', function (req, res) {
  res.send('Moshi moshi mina-san (^__^) ' + req.dateInfo)
})

app.get('/numbers', function (req, res) {
  res.json([1,2,3,4,5]);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})