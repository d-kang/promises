/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  fs.readFile('/' + filePath, 'utf8', (err, content) => {
    if (err) {
      cb(err);
    }
    content = content.split('\n');
    var firstLine = content[0];
    cb(null, firstLine);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, cb) {
  console.log('request.get', request.get);
  request.get(url, (err, res) => {
    if (err) { return cb(err); }
    cb(null, res.statusCode);
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
