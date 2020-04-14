const fs = require("fs");

module.exports.fileValidation = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if(err) {
        reject("This is a valid file with " + extension + "extension");
      }
      resolve(data)
    })
  })
}
