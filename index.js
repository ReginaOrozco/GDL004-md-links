const fs = require("fs");
const path = require("path");
const process = require("process");
const archivoMD  = process.argv[2];


const fileValidation = () => {
    let extension = path.extname(archivoMD);
    if (extension === ".md") {
        console.log("Este es un archivo extensión " + extension);
        return true;
    } else {
        console.error("Archivo inválido, su extensión es " + extension + ", por favor ingrese un archivo .md")
          return false;
    }
}
console.log(fileValidation(archivoMD));


  const readMD = fs.readFile(archivoMD, "utf8", (err, data) => {
    if (err) {
      console.log(err);

    } else {
      const findLinks = new RegExp(/https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+/g);
       const links = data.match(findLinks);
       console.log(links);

    }
  });

  const validateLinks = links => {
    for (let i = 0; i < links.length; i++);
  }
