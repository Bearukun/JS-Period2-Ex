var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', function (req, res) {
  req.session.username = req.body.username;
  res.redirect('/');
});

module.exports = router;