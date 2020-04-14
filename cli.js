const obj = require("./index.js");
const path = process.argv[3];

const commandsLine = () => {
  const options = {
      validate: false,
      stats: false,
  };

  if(process.argv.indexOf("--validate") > -1){
    options.validate = true;
  } else if (process.argv.indexOf("--stats") > -1){
    options.stats = true;
  }
};


console.log(obj.mdLinks)
