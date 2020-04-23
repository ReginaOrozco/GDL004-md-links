const { fileValidation } = require("./fileValidation.js");
const { extractLinks } = require("./extractLinks.js");
const { validateLinks } = require("./validateLinks.js");

module.exports.mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {

    const isValid = fileValidation(path);

    if(isValid === false){
      reject("It's not a valid file");
    }

    extractLinks(path)
    .then(linkObj => {
      if(options.validate && options.stats){
        //Aquí vamos a validar y contar los links
       } else if(options.validate === true) {
        validateLinks(linkObj).then(response => {
          //resolve(response)
          setTimeout(() => {
            console.log(response)
          },5000);

        })
      } else if(options.stats){
        //Aquí vamos a contar los links
      } else {
        //No valida ni cuenta solo devuelve la data
        resolve(linkObj)
      }

    })
    .catch((err) => {
      reject(err);
    })
  })
}

