/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var { getGitHubProfileAsync } = require('./promisification');
var writeFileAsync = Promise.promisify(fs.writeFile);
var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {

  return new Promise((resolve, reject) => {
    fs.readFile('/' + readFilePath, 'utf8', function(err, content) {
      if (err) {
        reject(err);
      } else {
        var profile = content.split('\n')[0];
        console.log('profile', profile);
        resolve(profile);
      }
    });
  })
    .then((user) => getGitHubProfileAsync(user))
    .then(profile => writeFileAsync(writeFilePath, JSON.stringify(profile)));
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
