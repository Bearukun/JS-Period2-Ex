var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
    req.session.jokesCount +=1;
    res.render('jokes', { title: 'All jokes', jokes: jokes.allJokes, count: req.session.jokesCount  });
});

module.exports = router;