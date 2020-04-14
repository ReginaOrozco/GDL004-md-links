const fs = require("fs");

module.exports.fileValidation = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if(err) {
        reject("This isn't a valid file with, please enter a file with .md extension");
      }
      resolve(data)
      console.log("This is a valid .md file");
    })
  })
}
