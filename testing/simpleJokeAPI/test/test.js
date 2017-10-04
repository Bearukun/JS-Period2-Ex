var expect = require("chai").expect;
var request = require("request");
var http = require("http");
var app = require('../app');
var server;
var TEST_PORT = 3456;

beforeEach(function(done){
  var app = require('../app');
  server = http.createServer(app);
  server.listen(TEST_PORT,function(){
    done();
  });
})
afterEach(function(done){
  server.close();
  done();
})

describe("POST: /api/joke ", function () {
  var options = {
    url: "http://localhost:" + TEST_PORT + "/api/joke",
    method: "POST",
    json: true,
    body: {joke: "Its better to be late than to arrive ugly"}
  }

  it("should get a random joke", function (done) {
    request(options, function (error, res, body) {
      var addedJoke = body.joke;
      expect(addedJoke.joke).to.be.equal("Its better to be late than to arrive ugly");
      //You should also check whether the joke actually was added to the Data-store
      done();
    });
  })
});


describe("GET: /api/joke/random ", () => {
    var options = {
        url: "http://localhost:" + TEST_PORT + "/api/joke/random",
        method: "GET",
        json: true
    }

    it("Should get a joke back, larger than 0", (done) => {
        request(options, (error, res, body) => {
            expect(res.body.length > 0)
            done();
        });
    })
});
