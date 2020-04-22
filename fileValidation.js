const path = require("path");

module.exports.fileValidation = (pathFile) => {
  if(path.extname(pathFile) != ".md") {
    return false;
  }
  return true;

}
