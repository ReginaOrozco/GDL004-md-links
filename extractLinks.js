const fs = require("fs");

/**
 * Lee el archivo en la ruta `mdFilePath` y extrae los links de dicho archivo
 * @param mdFilePath [String] Ruta a archivo en formato MD
 * @returns Promesa que resuelve a un array de objetos de links
 */
const extractLinks = (path) => { //Esta función debe de recibir siempre una ruta de un archivo md
    return new Promise ((resolve, reject) => {
      fs.readFile(path, "utf8",  (err, data) => {
        if(err) {
          reject(err);
        }

        const findLinks = new RegExp(/\[(.*)\]\((https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+)\)/g);
        const links = data.match(findLinks);
        let arrayLinks = []
          //return(links);

          for(let i = 0; i < links.length; i++){
            let regExpData = findLinks.exec(links[i]);
            if(regExpData){
              let objLink = {
                href: regExpData[2],
                text: regExpData[1],
                file: path
              }
              arrayLinks.push(objLink)
            }
          }

          resolve(arrayLinks); //Esta función retorna una promesa que resuelve un array de objetos de links
      })
    })
  }

module.exports.extractLinks = extractLinks
