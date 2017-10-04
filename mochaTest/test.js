/* var assert = require("assert"); //Use Nodes built in assertion libraty
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
}) */

/* var expect = require("chai").expect;

describe('Array', function(){
  describe('Verify the #indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      expect([1,2,3].indexOf(0)).to.be.equal(-1);
      expect([1,2,3].indexOf(5)).to.be.equal(-1);
      expect([1,2,3].indexOf(3)).to.be.equal(2);
    })
  })
});  */

/* var expect = require("chai").expect;

describe("Testing async behaviour", function(){
  var foo = false;
  before(function(done){
    setTimeout(function(){
      foo = true;
      done();  //Test will fail without this
    }, 1000);
  });
  it("should pass (with done called)", function(){
    expect(foo).to.equal(true);
  });
});  */

var expect = require("chai").expect;
var jokes = require("../module/joke");
var nock = require("nock");
var testJoke = {"id": 1234, "joke": "ha ha ha", "reference": "unknown"};

var n = nock('http://jokes-plaul.rhcloud.com');

describe('Person API Get', function () {
  before(function (done) {
    n.get('/api/joke')
      .reply(200,testJoke );
    done();
  });

  it('should fetch the vampire joke', function (done) {
    jokes.getJoke(function (err, joke) {
      if (err) {
        throw err;
      }
      expect(joke.reference).to.be.equal("unknown");
      expect(joke).to.be.eql(testJoke);
      done();
    })
  });
});