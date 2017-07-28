/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, cb) {
  // TODO
  fs.readFile(filePath, function(err, data) {
    if (err) {
      console.log('err::::::::\n', err);
      cb(err);
    } else {
      var firstLine = data.toString().split('\n')[0]
      console.log('data', firstLine);
      cb(err, firstLine);
    }
  })
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {

  //   console.log('statusCode:', response && response.statusCode);
  request(url, function (error, response, cb) {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      callback(error);
    } else {
      callback(error, response.statusCode);
    }
  });
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
