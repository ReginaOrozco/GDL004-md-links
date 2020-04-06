const fs = require("fs");
const path = require("path");
const process = require("process");
const mdFile  = process.argv[2];
const { validateLinks } = require("./validateLinks.js");
const { commands } = require("./cli.js");

const fileValidation = () => {
    let extension = path.extname(mdFile);
    if (extension === ".md") {
        return("Este es un archivo extensión " + extension);
    } else {
        return("Archivo inválido, su extensión es " + extension + ", por favor ingrese un archivo .md")
    }
};

const readFilePromise = (mdFile) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(mdFile, 'utf8', (err, data) => {
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

readFilePromise('./pruebaDeLinks.md').then((res)=> {
  console.log(res);

})

return new Promise ((resolve, reject) => {
    if(options.validate === true && options.stats === true){
      return links;
    } else {
      reject(err)
    }
  });
