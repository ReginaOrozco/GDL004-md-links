const fs = require("fs");
const path = require("path");
const process = require("process");
const archivoMD  = process.argv[2];
const { validateLinks } = require("./validateLinks.js");
//const { commands } = require("./cli.js");

const fileValidation = () => {
    let extension = path.extname(archivoMD);
    if (extension === ".md") {
        return("Este es un archivo extensión " + extension);
    } else {
        return("Archivo inválido, su extensión es " + extension + ", por favor ingrese un archivo .md")
    }
};

const readMD = (archivoMD) => {
    return fs.promise.readFile(archivoMD, "utf8")
        .then((data) => {
            const findLinks = new RegExp(/https?:\/\/[\w\.\-]+\.\w{2,5}[^\s\)]+/g);
            const links = data.match(findLinks);
            let arrayLinks = []
            return(links);
        })
        .then((links) => {
          validateLinks(links).then((linksValidated) => {
            console.log(linksValidated);
          })

        })
        .catch((err) => {
            return(err);
        });
    };
};

/*const mdLinks = (path, options) => {
	const array = [{
		href: "https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise",
		text:"Developer Mozilla",
	},
	{
		href: "https://githoub.com/Laboratoria/GDL004-md-links",
		text:"Githoub",
	}]
		validateLinks(array).then((res)=> {
      console.log("mi respuesta",res);
        })

/*  const promise = new Promise((resolve, reject) => {
		validateLinks(array)
	});
	return promise*/
//}

//mdLinks()
