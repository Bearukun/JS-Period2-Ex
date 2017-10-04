var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
    req.session.addJokeCount +=1;
    res.render('addjoke', { title: 'Add a new joke:', count: req.session.addJokeCount  });
});

module.exports = router;