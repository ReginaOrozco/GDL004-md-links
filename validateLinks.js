/**
 * ¿Qué hace la función?
 * @param parametro ¿Cuál es el parámetro?
 * @returns ¿Qué retorna la función?
 */

 const fetch = require("node-fetch");

 module.exports.validateLinks = (links) => {
   return new Promise ((resolve, reject) => {
      links.forEach(linkObj => {
         fetch(linkObj.href)
         .then((result) => {
            linkObj.status = result.ok;
         })
         .catch((err) => {
          linkObj.status = err.code
         });
        });
   })
 }
