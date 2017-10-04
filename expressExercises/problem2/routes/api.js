var express = require('express');
var router = express.Router();
var jokes = require('../model/jokes');

router.get('/joke/random', function (req, res, next) {
    res.json(jokes.getRandomJoke());
});
router.get('/jokes', function (req, res, next) {
    res.json(jokes.allJokes);
});
router.post('/joke', function (req, res, next) {
    jokes.addJoke(req.body.joke);
    res.send("Added..!");
});

module.exports = router;