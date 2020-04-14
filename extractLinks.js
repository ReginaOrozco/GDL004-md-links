const fs = require("fs");
const process = require("process");
const { validateLinks } = require("./validateLinks.js");
const { commandsLine } = require("./cli.js");


const readFilePromise = (mdFile) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(mdFile, "utf8", (err, data) => {
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
              text: regExpData[1],
              href: regExpData[2],
            }
            arrayLinks.push(objLink)
          }
        }

        resolve(arrayLinks);
    })
  })
}

module.exports.readFilePromise = readFilePromise
