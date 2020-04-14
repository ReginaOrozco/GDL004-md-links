const { fileValidation } = require("./fileValidation.js");
const { readFilePromise } = require("./extractLinks.js");

module.exports.mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    //Aquí debe de ir un if, para que en caso de que el path sea correcto
    //Los comandos ingresados (stats y/validate) se puedan leer
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

