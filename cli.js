const { mdLinks } = require("./index.js");
const path = process.argv[2];

const options = {
      validate: false,
      stats: false,
  };

  if(process.argv.indexOf("--validate") > -1 || process.argv.indexOf("--v") > -1){
    options.validate = true;
  } else if (process.argv.indexOf("--stats") > -1 || process.argv.indexOf("--s") > -1){
    options.stats = true;
  };


  mdLinks(path, options).then((data)=> {
    console.log(data);
  }).catch((err)=> {
    console.log(err);
  })
