/**
 * ¿Qué hace la función?
 * @param parametro ¿Cuál es el parámetro?
 * @returns ¿Qué retorna la función?
 */

 const fetch = require("node-fetch");

 module.exports.validateLinks = (links) => {
   return new Promise ((resolve, reject) => {
      let linksWithStatus = [];

      const promiseArray = links.map(linkObj => {

          return new Promise((resolve) => {
            fetch(linkObj.href)
            .then((result) => {
              resolve(result)
            })
            .catch((err) => {
              resolve(err)
            })
          } );
         });

         Promise.all(promiseArray)
         .then((result) => {
            result.forEach((response, i) => {
              const auxLink = {
                href: links[i].href,
                text: links[i].text,
                file: links[i].file,
                status: response.ok
              }
              linksWithStatus.push(auxLink)
            })

            resolve(linksWithStatus)
         })
         .catch((err) => {
           reject(err)
         })
        });
        resolve(linksWithStatus)

 }
