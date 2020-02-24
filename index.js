const fs = require('fs');
const path = require('path');
const filesPath = process.argv[2];

const fileValidation = () => {
  let extension = path.extname(filesPath);
  if (extension === '.md') {
      console.log("El archivo es un .md");
      readFile(filesPath);
  } else {
      console.error("Archivo no válido, ingresa un archivo con extensión .md")
  }
}

const readFile = filesPath => {
  fs.readFile(filesPath, 'utf8', (err, data) => {
    if (!err) {
      const expression = /(https?:\/\/[^\s]+)/g;
      const regex = new RegExp(expression);
       const links = data.match(regex);
       validLinks(links);

      return links;

    } else {
      console.error(error.message);
    }
  })
}
