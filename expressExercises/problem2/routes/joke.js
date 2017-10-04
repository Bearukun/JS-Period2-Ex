var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/', function (req, res, next) {
    req.session.jokeCount +=1;
    res.render('joke', { joke: jokes.getRandomJoke(), count: req.session.jokeCount });
});

module.exports = router;