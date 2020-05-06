const { fileValidation } = require("./fileValidation.js");
const { extractLinks } = require("./extractLinks.js");
const { validateLinks } = require("./validateLinks.js");
const { getOkLinks, getBrokenLinks } = require("./stats.js")

module.exports.mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {

    const isValid = fileValidation(path);

    if(isValid === false){
      reject("It's not a valid file");
    }

    extractLinks(path)
    .then(linkObj => {
      if(options.validate && options.stats){
       } else if(options.validate === true) {
        validateLinks(linkObj).then(response => {
          resolve(response)
        })
      } else if(options.stats){
        validateLinks(linkObj).then(response => {
         // console.log("El número total de links es " + getOkLinks.length(response))
          console.log("El número de links ok es " + getOkLinks(response))
          console.log("El número de links rotos es " + getBrokenLinks(response))
         // console.log("El número de links únicos es " + getUniqueLinks(response))
          //console.log("El número de links repetidos es " + getRepeatedLinks(response))
        })
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

