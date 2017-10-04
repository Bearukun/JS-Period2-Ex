var jokes = [
    "Wubba-lubba-dub-dub!",
    "And that's the waaaaay the news goes!",
    "And that's why I always say, \"shum-shum-schlippety-dop!\"",
    "No jumpin' in the sewer!",
    "Rubber baby bubby bunkers! ",
    " Uh-oh, somersault jump! "
];

const _addJoke = (joke) => {
    jokes.push(joke);
};

const _getRandomJoke = () => {
    return jokes[Math.floor(Math.random() * jokes.length)];
};

module.exports = {
    allJokes: jokes,
    getRandomJoke: _getRandomJoke,
    addJoke: _addJoke
}