'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');
var glob = require('glob');

describe('main', function () {
    it('should match the right content', function (done) {
        glob('./gen-nodejs/*.js', null, function (err, files) {
            files.forEach(function (file) {
                var originContent = fs.readFileSync(file);
                var expectedContent = fs.readFileSync(path.join(
                    path.dirname(path.dirname(file)),
                    'expected',
                    path.basename(file)
                ));
                assert(originContent === expectedContent);
            });
            done();
        });
    });
});
