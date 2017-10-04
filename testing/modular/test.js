var ex6Module = require('./exercise6module');
const fs = require('fs');

let dirname = './rng';
let ext = 'ext';
let filename = 'filename.' + ext;

before(function () {
    fs.mkdirSync(dirname);
    fs.writeFileSync(dirname + '/' + filename);

});

describe('ex6Module', function () {
    it('Should run the module', function (done) {
        ex6Module(dirname, ext, function (err, files) {
            files.forEach((element) => {
                console.log(element.toString());
            });
            //Code will be executes async, therefore we need to give the done-callback to mocha
            done();
        });
    })
});

after(function () {
    fs.unlinkSync(dirname + '/' + filename);
    fs.rmdirSync(dirname);
})