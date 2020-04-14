const { fileValidation } = require("./fileValidation.js");
const { extractLinks } = require("./extractLinks.js");

module.exports.mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    fileValidation(path)
    .then((res) => {
      if(res) {
        return extractLinks(path)
      }
    })
    .then(data => {
      //Aquí debe de ir un if, para que en caso de que el path sea correcto
      if(options.validate && options.stats){
        //Aquí vamos a validar y contar los links
       } else if(options.validate){
        //Aquí vamos a validar los links
      } else if(options.stats){
        //Aquí vamos a contar los links
      } else {
        //No valida ni cuenta solo devuelve la data
        resolve(data)
      }

    })
    .catch(reject)
  })
}

