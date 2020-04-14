const { fileValidation } = require('./fileValidation.js');
const { readFilePromise } = require('./extractLinks.js');

module.exports.mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    fileValidation(path)
    .then((res) => {
      return readFilePromise(res, path)
    })
    .then(data => {
      resolve(data)
    })
    .catch(reject)
  })
}
