const path = require("path");

module.exports.fileValidation = (pathFile) => {
  return new Promise((resolve, reject) => {
    if(path.extname(pathFile) != ".md") {
      reject("This isn't a valid file with, please enter a file with .md extension");
    }
    resolve(true)
    //console.log("This is a valid .md file");
  })
}
